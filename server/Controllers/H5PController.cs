#nullable enable
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Threading.Tasks;
using Dapper;
using DotNetEnv;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using vianna_h5p.DTOs;
using vianna_h5p.Helpers;
using vianna_h5p.Middlewares;
using vianna_h5p.Models;
using JsonSerializer = Utf8Json.JsonSerializer;
using Library = vianna_h5p.Models.Library;

namespace vianna_h5p.Controllers
{
    [CheckProdMode]
    [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
    [Route("api")]
    [ApiController]
    public class H5PController : Controller
    {
        private readonly IWebHostEnvironment _env;
        private IDbConnection Db { get; }

        public H5PController(IWebHostEnvironment env, IDbConnection dbConnection)
        {
            _env = env;
            Db = dbConnection;
        }

        [HttpGet("libraries")]
        public async Task<ActionResult> Libraries([FromQuery] string machineName, [FromQuery] int majorVersion,
            [FromQuery] int minorVersion)
        {
            try
            {
                var libraryWebPath = $"/libraries/{machineName}-{majorVersion}.{minorVersion}";
                var libraryPath = $"{_env.ContentRootPath}/Public{libraryWebPath}";
                if (!Directory.Exists(libraryPath))
                {
                    return Json(new
                    {
                        error = "کتابخانه مورد نظر وجود ندارد"
                    });
                }

                //check and add upgrades.js file
                string? upgrades = null;
                if (System.IO.File.Exists(libraryPath + "/upgrades.js"))
                {
                    upgrades = Env.GetString("WEBSITE_URL") + libraryWebPath + "/upgrades.js";
                }

                var cssPaths = new List<string>();
                var jsPaths = new List<string>();

                //get request library data from DB
                var library = await Db.QuerySingleAsync<Library>(
                    "select id, semantics, title from libraries where name=@machineName and major_version=@majorVersion and minor_version=@minorVersion",
                    new
                    {
                        machineName, majorVersion, minorVersion
                    });
                if (library == null || Convert.IsDBNull(library))
                {
                    return Json(new
                    {
                        error = "کتابخانه مورد نظر یافت نشد"
                    });
                }

                dynamic? semantics = library.semantics;

                //check DB for cached assets if exists add them to css and js paths array and if not exists create cache
                var cache = (await Db.QueryAsync<dynamic>(
                    "select path from cached_assets where cached_type='library' and cached_id=@id", new
                    {
                        library.id
                    })).ToList();

                library.editorDependencies = await LibraryEditorDependencies(library.id);

                if (!Convert.IsDBNull(cache) && cache.Any())
                {
                    cssPaths.Add((string) cache[0].path);
                    jsPaths.Add((string) cache[1].path);
                }
                else
                {
                    foreach (var lib in library.editorDependencies!)
                    {
                        string depPath =
                            $"{_env.ContentRootPath}/Public/libraries/{lib!.machineName}-{lib.majorVersion}.{lib.minorVersion}/";
                        if (!string.IsNullOrEmpty(lib.preloadedCss))
                        {
                            cssPaths.AddRange(lib.preloadedCss.Split(',').Select(css => css.Trim().Insert(0, depPath)));
                        }

                        if (string.IsNullOrEmpty(lib.preloadedJs)) continue;
                        jsPaths.AddRange(lib.preloadedJs.Split(',').Select(js => js.Trim().Insert(0, depPath)));
                    }

                    //check and add presave.js file
                    if (System.IO.File.Exists(libraryPath + "/presave.js"))
                    {
                        jsPaths.Add(libraryPath + "/presave.js");
                    }

                    var cssContent = AssetHelper.BundleAsset("css", cssPaths);
                    var jsContent = AssetHelper.BundleAsset("js", jsPaths);
                    cssContent = AssetHelper.MinifyAsset("css", cssContent);
                    jsContent = AssetHelper.MinifyAsset("js", jsContent);

                    var librariesCacheFolderPath = $"{_env.ContentRootPath}/Public/cache/libraries";
                    if (!Directory.Exists(librariesCacheFolderPath))
                    {
                        Directory.CreateDirectory(librariesCacheFolderPath);
                    }

                    await System.IO.File.WriteAllTextAsync(
                        $"{librariesCacheFolderPath}/{machineName}-{majorVersion}.{minorVersion}.min.css",
                        cssContent);
                    await System.IO.File.WriteAllTextAsync(
                        $"{librariesCacheFolderPath}/{machineName}-{majorVersion}.{minorVersion}.min.js",
                        jsContent);
                    await Db.ExecuteAsync(
                        "insert into cached_assets (cached_id,cached_type,path) values (@cached_id,@cached_type,@css_path),(@cached_id,@cached_type,@js_path);",
                        new
                        {
                            cached_id = library.id, cached_type = "library",
                            css_path = $"/cache/libraries/{machineName}-{majorVersion}.{minorVersion}.min.css",
                            js_path = $"/cache/libraries/{machineName}-{majorVersion}.{minorVersion}.min.js"
                        });
                    cssPaths = new List<string>
                        {$"/cache/libraries/{machineName}-{majorVersion}.{minorVersion}.min.css"};
                    jsPaths = new List<string> {$"/cache/libraries/{machineName}-{majorVersion}.{minorVersion}.min.js"};
                }

                //get translations from DB
                var translatedSemantics = await Db.QuerySingleAsync<Translation>(
                    "select translation from translates where code='fa' and library_id=@id", new
                    {
                        library.id
                    });

                return Json(new DTOs.Library
                {
                    name = machineName,
                    version = new
                    {
                        major = majorVersion,
                        minor = minorVersion
                    },
                    title = library.title,
                    upgradesScript = upgrades,
                    semantics = JsonSerializer.Deserialize<dynamic>(semantics),
                    languages = new[] {"fa"},
                    css = cssPaths,
                    javascript = jsPaths,
                    language = translatedSemantics.translation,
                    translations =
                        await GetTranslations(library.editorDependencies!)
                }, new JsonSerializerOptions
                {
                    Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "دریافت اطلاعات با خطا مواجه شد"
                });
            }
        }

        [HttpPost("libraries")]
        public async Task<JsonResult> Library([FromForm] LibrariesPOST data)
        {
            try
            {
                var libs = new List<dynamic>();
                //split libraries name by space to get only machineName of them
                var librariesNames = data.libraries.Select(lib => lib.Split(" ")[0]).ToList();
                var librarysInfo =
                    await Db.QueryAsync<Library>(
                        "select name as machineName, major_version as majorVersion, minor_version as minorVersion, patch_version as patchVersion, runnable, semantics, tutorial_url, metadata_settings as metadataSettings from libraries where name in @names",
                        new {names = librariesNames});
                foreach (var lib in librarysInfo)
                {
                    libs.Add(new
                    {
                        uberName =
                            $"{lib.machineName} {lib.majorVersion}.{lib.minorVersion}",
                        name = lib.machineName,
                        majorVersion = lib.majorVersion.ToString(),
                        minorVersion = lib.minorVersion.ToString(),
                        tutorialUrl = "",
                        title = lib.machineName!.Split(".")[1],
                        runnable = lib.runnable.ToString(),
                        restricted = false,
                        lib.metadataSettings
                    });
                }

                return Json(libs);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "دریافت اطلاعات با خطا مواجه شد"
                });
            }
        }

        [HttpGet("content_types")]
        public ActionResult ContentTypes()
        {
            try
            {
                var contentTypes = Db.Query<ContentType>("select * from content_types");
                return Json(new
                {
                    apiVersion = new
                    {
                        major = 1,
                        minor = 24
                    },
                    libraries = contentTypes
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "دریافت اطلاعات با خطا مواجه شد"
                });
            }
        }

        public async Task<List<Library>> LibraryEditorDependencies(int? libraryId)
        {
            var library = await Db.QuerySingleAsync<Library>(@$"select id, name as machineName,
                                                              major_version as majorVersion,
                                                              minor_version as minorVersion,
                                                              preloaded_css as preloadedCss,
                                                              preloaded_js  as preloadedJs from libraries where id={libraryId}");
            var deps = await Db.QueryAsync<Library>(@$"WITH editor_deps AS (
                                                     select library_id, required_library_id, 1 as depth
                                                     from library_library
                                                     where library_id = {libraryId}
                                                     UNION ALL
                                                    select library_library.library_id, library_library.required_library_id, editor_deps.depth + 1
                                                     from editor_deps
                                                     join library_library on editor_deps.required_library_id = library_library.library_id
                                                     where library_library.required_library_id != editor_deps.library_id )
                                                     select id, name as machineName,
                                                     major_version as majorVersion,
                                                     minor_version as minorVersion,
                                                     preloaded_css as preloadedCss,
                                                     preloaded_js as preloadedJs
                                                     from libraries join editor_deps
                                                     on libraries.id = editor_deps.required_library_id
                                                     order by depth desc");
            return deps.GroupBy(lib => lib.id).Select(lib => lib.First()).Append(library).ToList();
        }

        public async Task<Dictionary<string?, dynamic>> GetTranslations(List<Library> libraries, string lang = "fa")
        {
            var translations =
                (await Db.QueryAsync<Translation>(
                    "select library_id,translation from translates where code=@code and is_editor=1 and library_id in @ids",
                    new
                    {
                        code = lang, ids = libraries.Select(lib => lib.id).ToList()
                    })).ToList();
            //create dictionary of translates in form of key = machineName and value = deserialized json of translation
            return translations
                .Join(libraries, arg => arg.library_id, arg => arg.id,
                    (first, second) => new {second.machineName, first.translation})
                .ToDictionary(x => x.machineName, x => JsonSerializer.Deserialize<dynamic>(x.translation));
        }
    }
}