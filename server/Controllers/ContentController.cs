#nullable enable
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
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
using File = vianna_h5p.Models.File;
using JsonSerializer = System.Text.Json.JsonSerializer;
using Library = vianna_h5p.Models.Library;

namespace vianna_h5p.Controllers
{
    [CheckProdMode]
    [Route("api")]
    [ApiController]
    public class ContentController : Controller
    {
        private List<int>? _preloadedDependencies;
        private readonly IWebHostEnvironment _env;
        private IDbConnection Db { get; }

        public ContentController(IWebHostEnvironment env, IDbConnection dbConnection)
        {
            _env = env;
            Db = dbConnection;
        }

        [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
        [HttpGet("contents")]
        public ActionResult Index()
        {
            try
            {
                if (HttpContext.Items["user_id"] == null)
                {
                    return Json(new
                    {
                        error = "شناسه کاربر نامعتبر می باشد"
                    });
                }

                var contents = Db.Query<Contents>(
                    "select contents.id as id,contents.title as title,contents.created_at as created_at,libraries.name as library_name from contents join libraries on contents.library_id = libraries.id where user_id=@user_id",
                    new {user_id = (int) HttpContext.Items["user_id"]!});
                return Json(contents);
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

        [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
        [HttpPost("upload_file")]
        public async Task<ActionResult> Upload([FromForm] FileUpload request)
        {
            try
            {
                if (request.file.Length == 0)
                    return Json(new
                    {
                        error = "فایل نامعتبر می باشد"
                    });
                var randomName = $"{Guid.NewGuid()}{Path.GetExtension(request.file.FileName)}";
                await Db.ExecuteAsync(
                    "insert into files (user_id, content_id, type, path, created_at) values (@user_id,@content_id,@type,@path,@date);",
                    new
                    {
                        user_id = (int) HttpContext.Items["user_id"]!, path = $"/temp/{randomName}",
                        date = DateTime.Now,
                        content_id = request.contentId,
                        type = request.file.ContentType
                    });
                string h5PTempPath = _env.ContentRootPath + "/Public/temp";
                if (!Directory.Exists(h5PTempPath))
                {
                    Directory.CreateDirectory(h5PTempPath);
                }

                var filePath = Path.Combine(h5PTempPath, randomName);
                await using var stream = System.IO.File.Create(filePath);
                await request.file.CopyToAsync(stream);
                return Json(new
                {
                    path = $"{Env.GetString("WEBSITE_URL")}/temp/{randomName}",
                    mime = request.file.ContentType,
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "آپلود فایل با خطا مواجه شد"
                });
            }
        }

        [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
        [HttpDelete("contents")]
        public async Task<JsonResult> Delete([FromBody] DeleteContent content)
        {
            try
            {
                var h5pPath = _env.ContentRootPath + $"/Public/h5ps/{content.username}/{content.id}";
                if (Directory.Exists(h5pPath))
                {
                    Directory.Delete(h5pPath, true);
                }

                await Db.ExecuteAsync(@"
                      delete from files where content_id=@id;
                      delete from cached_assets where cached_type='content' and cached_id=@id;
                      delete from contents where id=@id;
                ", new {content.id});
                return Json(new
                {
                    success = true,
                    msg = "عملیات با موفقیت انجام شد"
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "عملیات با خطا مواجه شد"
                });
            }
        }

        [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
        [HttpGet("get_iframe/{id:int}")]
        public ActionResult GetIframe([FromRoute] int id)
        {
            try
            {
                var content = Db.QuerySingle<Content>("select id from contents where id=@id",
                    new {id});
                if (content == null || Convert.IsDBNull(content))
                {
                    return Json(new {error = "محتوای مورد نظر وجود ندارد"});
                }

                return Json(new
                {
                    iframe =
                        @$"<iframe src=""{Env.GetString("WEBSITE_URL")}/iframe?contentId={id}"" width=""800"" height=""450"" frameborder=""0"" allowfullscreen></iframe>"
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

        [HttpGet("/iframe")]
        public async Task<ActionResult> Iframe([FromQuery] int? contentId)
        {
            try
            {
                if (contentId == null)
                {
                    return Json(new {error = "شناسه محتوا نامعتبر است"});
                }

                var content = await Db.QuerySingleAsync<Content>(
                    "select id,title,library_id,parameters from contents where id=@id",
                    new {id = contentId});
                if (content == null || Convert.IsDBNull(content))
                {
                    return Json(new {error = "محتوای مورد نظر وجود ندارد"});
                }

                var mainLib = await Db.QuerySingleAsync<Library>(
                    "select name as machineName, title, major_version as majorVersion, minor_version as minorVersion,embed_types from libraries where id=@id",
                    new
                    {
                        id = content.library_id
                    });
                var deps = (await Db.QueryAsync<dynamic>(
                    "select path from cached_assets where cached_id=@contentID and cached_type='content'", new
                    {
                        contentID = contentId
                    })).ToList();

                var cssPath = new List<string> {(string) deps[0].path};
                var jsPath = new List<string> {(string) deps[1].path};

                if (mainLib == null)
                {
                    return Json(new
                    {
                        error = "کتابخانه اصلی یافت نشد"
                    });
                }

                if (mainLib.embed_types != null) ViewBag.embed_type = mainLib.embed_types;
                if (mainLib.embed_types != "iframe")
                {
                    ViewBag.css = cssPath;
                    ViewBag.js = jsPath;
                }

                ViewBag.contentID = content.id ?? 0;
                var H5PIntegration = new
                {
                    baseUrl = Env.GetString("WEBSITE_URL"),
                    url = $"{Env.GetString("WEBSITE_URL")}/h5ps",
                    saveFreq = false,
                    siteUrl = Env.GetString("WEBSITE_URL"),
                    l10n = new
                    {
                        H5P = new
                        {
                            fullscreen = "تمام صفحه",
                            disableFullscreen = "غیرفعال سازی تمام صفحه",
                            size = "اندازه",
                            showAdvanced = "نمایش پیشرفته",
                            hideAdvanced = "پنهان سازی حالت پیشرفته",
                            close = "بستن",
                            title = "عنوان",
                            source = "منبع",
                            contentChanged = "این محتوا از آخرین باری که مشاهده کرده اید تغییر کرده است",
                            startingOver = "شما از اول شروع می کنید",
                            by = "توسط",
                            showMore = "نمایش بیشتر",
                            showLess = "نمایش کمتر",
                            subLevel = "زیرمرحله",
                            confirmDialogHeader = "تایید واکنش",
                            confirmDialogBody =
                                "لطفا برای ادامه کار تایید کنید. این عمل غیرقابل بازگشت می باشد",
                            cancelLabel = "لغو",
                            confirmLabel = "تایید",
                            contentType = "نوع محتوا",
                            changes = "تغییرات",
                            contentCopied = "محتوا کپی شد",
                            connectionLost =
                                "ارتباط قطع شد.نتایج زمانی که ارتباط برقرار شود مجددا ارسال می شود",
                            connectionReestablished = "ارتباط برقرار شد",
                            resubmitScores = "در حال تلاش برای ارسال نتایج...",
                            offlineDialogHeader = "ارتباط با سرور قطع شد",
                            offlineDialogBody =
                                "اطلاعات ارسال نشد لطفا اینترنت خود را بررسی کنید.",
                            offlineDialogRetryMessage = "در حال اتصال :num....",
                            offlineDialogRetryButtonLabel = "در حال تلاش مجدد",
                            offlineSuccessfulSubmit = "نتایج با موفقیت ارسال شد."
                        }
                    },
                    contents = new ExpandoObject(),
                    core = new
                    {
                        styles = new[]
                        {
                            "/cache/core/core.min.css"
                        },
                        scripts = new[]
                        {
                            "/cache/core/core.min.js"
                        }
                    },
                    loadedCss = mainLib.embed_types == "iframe" ? new List<string>() : cssPath,
                    loadedJs = mainLib.embed_types == "iframe" ? new List<string>() : jsPath
                };

                H5PIntegration.contents.TryAdd($"cid-{content.id}", new
                {
                    library = $"{mainLib.machineName} {mainLib.majorVersion}.{mainLib.minorVersion}",
                    jsonContent = JsonSerializer.Serialize(content.Parameters?.Params),
                    fullScreen = false,
                    content.title,
                    // contentUserData = "",
                    displayOptions = new
                    {
                        frame = false,
                        export = false,
                        embed = false,
                        copyright = false,
                        icon = false
                    },
                    content.Parameters?.metadata,
                    styles = mainLib.embed_types == "iframe" ? cssPath : new List<string>(),
                    scripts = mainLib.embed_types == "iframe" ? jsPath : new List<string>(),
                    contentUrl = $"{Env.GetString("WEBSITE_URL")}/iframe?contentId={content.id}"
                });

                ViewBag.H5PIntegration = JsonSerializer.Serialize(H5PIntegration,
                    new JsonSerializerOptions
                    {
                        Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
                        WriteIndented = true
                    });
                return View("/Views/IFrame.cshtml");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "عملیات با خطا مواجه شد"
                });
            }
        }

        [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
        [HttpPost("contents")]
        public async Task<ActionResult> Create([FromBody] ContentRequest request)
        {
            try
            {
                if (request.user_id == null)
                {
                    return Json(new
                    {
                        error = "شناسه کاربر نامعتبر می باشد"
                    });
                }

                var user = await Db.QuerySingleAsync<User>("select username from users where id=@id",
                    new {id = request.user_id});
                if (user == null || Convert.IsDBNull(user))
                {
                    return Json(new
                    {
                        error = "کاربر مورد نظر یافت نشد"
                    });
                }

                var libraryMachineName = request.library!.Split(" ")[0];
                var library = await Db.QuerySingleAsync<Library>(
                    "select id from libraries where name=@name and major_version=@majorVersion and minor_version=@minorVersion",
                    new
                    {
                        name = libraryMachineName, majorVersion = request.library!.Split(" ")[1].Split(".")[0],
                        minorVersion = request.library!.Split(" ")[1].Split(".")[1]
                    });
//----------------------------------------------------insert content---------------------------------------------------
                var contentId = Db.ExecuteScalar<int>(
                    "insert into contents (created_at, user_id, title, library_id, parameters) output inserted.id values (@date,@user_id,@title,@library_id,@parameters)",
                    new
                    {
                        date = DateTime.Now,
                        request.user_id, request.title, library_id = library.id,
                        parameters = request.Params!.RootElement.ToString()
                    });
//---------------------------------------------------process uploaded file---------------------------------------------
                var uploadedFilesPath = request.Params.SelectElements("$..path")
                    .Where(a => a!.Value.ValueKind == JsonValueKind.String).Select(a => a?.GetString())
                    .ToList();
                for (var i = 0; i < uploadedFilesPath.Count; i++)
                {
                    uploadedFilesPath[i] = uploadedFilesPath[i]?.Replace(Env.GetString("WEBSITE_URL"), "");
                }

                //move files to user content folder
                //update files table
                //update paths in params
                string newParams = request.Params.RootElement.ToString()!;
                var contentPath = $"{_env.ContentRootPath}/Public/h5ps/{user.username}/{contentId}";
                if (!Directory.Exists(contentPath))
                {
                    Directory.CreateDirectory(contentPath);
                }

                foreach (var path in uploadedFilesPath)
                {
                    if (System.IO.File.Exists($"{_env.ContentRootPath}/Public{path}") &&
                        !System.IO.File.Exists(
                            $"{contentPath}/{Path.GetFileName(path)}"))
                    {
                        System.IO.File.Move($"{_env.ContentRootPath}/Public{path}",
                            $"{contentPath}/{Path.GetFileName(path)}");
                    }

                    await Db.ExecuteAsync(
                        "update files set path=@newPath, is_draft=0,content_id=@content_id where path=@prevPath", new
                        {
                            prevPath = path, newPath = $"/h5ps/{user.username}/{contentId}/{Path.GetFileName(path)}",
                            content_id = contentId
                        });
                    if (path != null)
                        newParams = newParams.Replace($"{Env.GetString("WEBSITE_URL")}{path}",
                            $"{Env.GetString("WEBSITE_URL")}/h5ps/{user.username}/{contentId}/{Path.GetFileName(path)}");
                }

                await Db.ExecuteAsync("update contents set parameters=@parameters where id=@content_id", new
                {
                    content_id = contentId,
                    parameters = newParams
                });
//---------------------------------------------------addons------------------------------------------------------------
                var addons = request.Params.SelectElements("$..library")
                    .Where(a => a!.Value.ValueKind == JsonValueKind.String).Select(a => a?.GetString())
                    .ToList();
                List<int>? addonsIDs = null;
                if (addons.Any())
                {
                    addonsIDs = (List<int>?) await Db.QueryAsync<int>("select id from libraries where name in @names",
                        new
                        {
                            names = addons.Select(addon => addon.Split(" ")[0]).ToList()
                        });
                }

//---------------------------------------------------addons------------------------------------------------------------
                _preloadedDependencies = LibraryDependencies(library.id);
                if (addonsIDs != null && addonsIDs.Any())
                {
                    foreach (var addonId in addonsIDs)
                    {
                        _preloadedDependencies.AddRange(LibraryAddons(addonId, _preloadedDependencies));
                    }
                }

                _preloadedDependencies = _preloadedDependencies.Distinct().ToList();

                var depLibraries = await Db.QueryAsync<Library>(
                    "select id,name as machineName,major_version as majorVersion,minor_version as minorVersion,preloaded_css as preloadedCss,preloaded_js as preloadedJs from libraries where id in @ids",
                    new
                    {
                        ids = _preloadedDependencies
                    });

                depLibraries = depLibraries.OrderBy(lib => _preloadedDependencies.IndexOf(lib.id)).ToList();
                var cssPaths = new List<string>();
                var jsPaths = new List<string>();
                foreach (var lib in depLibraries)
                {
                    string libraryPath =
                        $"{_env.ContentRootPath}/Public/libraries/{lib!.machineName}-{lib.majorVersion}.{lib.minorVersion}/";
                    if (!string.IsNullOrEmpty(lib.preloadedCss))
                    {
                        cssPaths.AddRange(lib.preloadedCss.Split(',').Select(css => css.Trim().Insert(0, libraryPath)));
                    }

                    if (string.IsNullOrEmpty(lib.preloadedJs)) continue;
                    jsPaths.AddRange(lib.preloadedJs.Split(',').Select(js => js.Trim().Insert(0, libraryPath)));
                }

                var css = AssetHelper.BundleAsset("css", cssPaths);
                var js = AssetHelper.BundleAsset("js", jsPaths);

                css = AssetHelper.MinifyAsset("css", css);
                js = AssetHelper.MinifyAsset("js", js);

                var contentGuid = Guid.NewGuid().ToString();
                await System.IO.File.WriteAllTextAsync($"{contentPath}/{contentGuid}.min.css", css);
                await System.IO.File.WriteAllTextAsync($"{contentPath}/{contentGuid}.min.js", js);

                await Db.ExecuteAsync(
                    "insert into cached_assets (cached_id,cached_type,path) values (@cached_id,@cached_type,@css_path),(@cached_id,@cached_type,@js_path);",
                    new
                    {
                        cached_id = contentId, cached_type = "content",
                        css_path = $"/h5ps/{user.username}/{contentId}/{contentGuid}.min.css",
                        js_path = $"/h5ps/{user.username}/{contentId}/{contentGuid}.min.js"
                    });
                return Json(new
                {
                    success = true,
                    msg = "محتوا با موفقیت ایجاد شد"
                });
            }
            catch (SqlException ex)
            {
                switch (ex.Number)
                {
                    case 2627: // Unique constraint error
                    case 547: // Constraint check violation
                    case 2601: // Duplicated key row error
                        return Json(new
                        {
                            error = "عنوان محتوا تکراری می باشد"
                        });
                    default:
                        return Json(new
                        {
                            error = "ذخیره اطلاعات با خطا مواجه شد",
                        });
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "ذخیره اطلاعات با خطا مواجه شد",
                });
            }
        }

        [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
        [HttpPut("contents")]
        public async Task<ActionResult> Update([FromBody] ContentRequest request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(new {error = "لطفا تمامی فیلد ها را وارد نمایید"});
                }

                var libraryMachineName = request.library!.Split(" ")[0];

                var user = await Db.QuerySingleAsync<User>("select username from users where id=@id",
                    new {id = request.user_id});
                if (user == null || Convert.IsDBNull(user))
                {
                    return Json(new
                    {
                        error = "کاربر مورد نظر یافت نشد"
                    });
                }

                var content = await Db.QuerySingleAsync<Content>(
                    "select id,library_id from contents where id=@id", new
                    {
                        id = request.contentId
                    });
                if (content == null || Convert.IsDBNull(content))
                {
                    return Json(new
                    {
                        error = "محتوای مورد نظر یافت نشد"
                    });
                }

                var uploadedFilesPath = request.Params.SelectElements("$..path")
                    .Where(a => a!.Value.ValueKind == JsonValueKind.String).Select(a => a?.GetString())
                    .ToList();

                string newParams = request.Params!.RootElement.ToString()!;
                var userContentPath = $"{_env.ContentRootPath}/Public/h5ps/{user.username}/{content.id}";
                if (!Directory.Exists(userContentPath))
                {
                    Directory.CreateDirectory(userContentPath);
                }

                if (uploadedFilesPath.Any())
                {
                    for (var i = 0; i < uploadedFilesPath.Count; i++)
                    {
                        uploadedFilesPath[i] = uploadedFilesPath[i]?.Replace(Env.GetString("WEBSITE_URL"), "");
                    }

                    //all files are new
                    if (uploadedFilesPath.All(f => f!.Contains("temp")))
                    {
                        //delete all previous files
                        await Db.ExecuteAsync("delete from files where content_id=@content_id", new
                        {
                            content_id = content.id
                        });
                        foreach (var file in Directory.GetFiles(userContentPath))
                        {
                            System.IO.File.Delete(file);
                        }

                        foreach (var path in uploadedFilesPath)
                        {
                            if (System.IO.File.Exists($"{_env.ContentRootPath}/Public{path}") &&
                                !System.IO.File.Exists(
                                    $"{userContentPath}/{Path.GetFileName(path)}"))
                            {
                                System.IO.File.Move($"{_env.ContentRootPath}/Public{path}",
                                    $"{userContentPath}/{Path.GetFileName(path)}");
                            }

                            await Db.ExecuteAsync(
                                "update files set path=@newPath, is_draft=0,content_id=@content_id where path=@prevPath",
                                new
                                {
                                    content_id = content.id,
                                    prevPath = path,
                                    newPath = $"/h5ps/{user.username}/{content.id}/{Path.GetFileName(path)}"
                                });
                            if (path != null)
                                newParams = newParams.Replace($"{Env.GetString("WEBSITE_URL")}{path}",
                                    $"{Env.GetString("WEBSITE_URL")}/h5ps/{user.username}/{content.id}/{Path.GetFileName(path)}");
                        }
                    }
                    //there are some new files OR all previous files removed
                    else
                    {
                        var prevFiles = await Db.QueryAsync<File>(
                            "select path from files where content_id=@content_id and is_draft=0", new
                            {
                                content_id = content.id
                            });
                        var prevFilesPaths = prevFiles.Select(f => f.path).ToList();

                        //compare prevFilesPaths and uploadedFilesPath
                        var shouldDeletePrevFiles = prevFilesPaths.Except(uploadedFilesPath).ToList();

                        //there are some new files
                        if (shouldDeletePrevFiles.Any())
                        {
                            foreach (var path in shouldDeletePrevFiles.Where(path =>
                                System.IO.File.Exists($"{_env.ContentRootPath}/Public{path}")))
                            {
                                System.IO.File.Delete($"{_env.ContentRootPath}/Public{path}");
                            }

                            await Db.ExecuteAsync("delete from files where path in @paths", new
                            {
                                paths = shouldDeletePrevFiles
                            });

                            foreach (var path in uploadedFilesPath)
                            {
                                if (System.IO.File.Exists($"{_env.ContentRootPath}/Public{path}") &&
                                    !System.IO.File.Exists(
                                        $"{userContentPath}/{Path.GetFileName(path)}"))
                                {
                                    System.IO.File.Move($"{_env.ContentRootPath}/Public{path}",
                                        $"{userContentPath}/{Path.GetFileName(path)}");
                                }

                                await Db.ExecuteAsync(
                                    "update files set path=@newPath, is_draft=0,content_id=@content_id where path=@prevPath",
                                    new
                                    {
                                        content_id = content.id,
                                        prevPath = path,
                                        newPath = $"/h5ps/{user.username}/{content.id}/{Path.GetFileName(path)}"
                                    });
                                if (path != null)
                                    newParams = newParams.Replace($"{Env.GetString("WEBSITE_URL")}{path}",
                                        $"{Env.GetString("WEBSITE_URL")}/h5ps/{user.username}/{content.id}/{Path.GetFileName(path)}");
                            }
                        }
                        //all files not changed and does not need to implement
                    }
                }
                //all previous files removed
                else
                {
                    await Db.ExecuteAsync("delete from files where content_id=@content_id", new
                    {
                        content_id = content.id
                    });
                    foreach (var file in Directory.GetFiles(userContentPath))
                    {
                        System.IO.File.Delete(file);
                    }
                }

                var newLibrary = await Db.QuerySingleAsync<Library>(
                    "select id from libraries where name=@name and major_version=@majorVersion and minor_version=@minorVersion",
                    new
                    {
                        name = libraryMachineName, majorVersion = request.library!.Split(" ")[1].Split(".")[0],
                        minorVersion = request.library!.Split(" ")[1].Split(".")[1]
                    });
                await Db.ExecuteAsync(
                    "update contents set title=@title,parameters=@parameters,library_id=@library_id where id=@id",
                    new
                    {
                        request.title, parameters = newParams,
                        library_id = newLibrary.id,
                        content.id
                    });
                await Db.ExecuteAsync("delete from cached_assets where cached_type='content' and cached_id=@id",
                    new {content.id});

//---------------------------------------addons----------------------------------------------------------
                var addons = request.Params.SelectElements("$..library")
                    .Where(a => a is {ValueKind: JsonValueKind.String}).Select(a => a?.GetString())
                    .ToList();
                List<int>? addonsIDs = null;
                if (addons.Any())
                {
                    addonsIDs = await Db.QueryAsync<int>("select id from libraries where name in @names", new
                    {
                        names = addons.Select(addon => addon?.Split(" ")[0]).ToList()
                    }) as List<int>;
                }

//---------------------------------------addons----------------------------------------------------------
                _preloadedDependencies = LibraryDependencies(newLibrary.id);
                if (addonsIDs != null && addonsIDs.Any())
                {
                    foreach (var addonId in addonsIDs)
                    {
                        _preloadedDependencies.AddRange(LibraryAddons(addonId, _preloadedDependencies));
                    }
                }

                _preloadedDependencies = _preloadedDependencies.Distinct().ToList();

                var depLibraries = await Db.QueryAsync<Library>(
                    "select id,name as machineName,major_version as majorVersion,minor_version as minorVersion,preloaded_css as preloadedCss,preloaded_js as preloadedJs from libraries where id in @ids",
                    new
                    {
                        ids = _preloadedDependencies
                    });

                depLibraries = depLibraries.OrderBy(lib => _preloadedDependencies.IndexOf(lib.id)).ToList();
                var cssPaths = new List<string>();
                var jsPaths = new List<string>();
                foreach (var lib in depLibraries)
                {
                    var libraryPath =
                        $"{_env.ContentRootPath}/Public/libraries/{lib!.machineName}-{lib.majorVersion}.{lib.minorVersion}/";
                    if (!string.IsNullOrEmpty(lib.preloadedCss))
                    {
                        cssPaths.AddRange(lib.preloadedCss.Split(',').Select(css => css.Trim().Insert(0, libraryPath)));
                    }

                    if (string.IsNullOrEmpty(lib.preloadedJs)) continue;
                    jsPaths.AddRange(lib.preloadedJs.Split(',').Select(js => js.Trim().Insert(0, libraryPath)));
                }

                var css = AssetHelper.BundleAsset("css", cssPaths);
                var js = AssetHelper.BundleAsset("js", jsPaths);

                css = AssetHelper.MinifyAsset("css", css);
                js = AssetHelper.MinifyAsset("js", js);

                var contentGuid = Guid.NewGuid().ToString();
                await System.IO.File.WriteAllTextAsync(
                    $"{userContentPath}/{contentGuid}.min.css", css);
                await System.IO.File.WriteAllTextAsync(
                    $"{userContentPath}/{contentGuid}.min.js", js);

                await Db.ExecuteAsync(
                    "insert into cached_assets (cached_id,cached_type,path) values (@cached_id,@cached_type,@css_path),(@cached_id,@cached_type,@js_path);",
                    new
                    {
                        cached_id = content.id, cached_type = "content",
                        css_path = $"/h5ps/{user.username}/{content.id}/{contentGuid}.min.css",
                        js_path = $"/h5ps/{user.username}/{content.id}/{contentGuid}.min.js"
                    });
                return Json(new
                {
                    success = true,
                    msg = "محتوا با موفقیت ویرایش شد"
                });
            }
            catch (SqlException ex)
            {
                switch (ex.Number)
                {
                    case 2627: // Unique constraint error
                    case 547: // Constraint check violation
                    case 2601: // Duplicated key row error
                        return Json(new
                        {
                            error = "عنوان محتوا تکراری می باشد"
                        });
                    default:
                        return Json(new
                        {
                            error = "ذخیره اطلاعات با خطا مواجه شد",
                        });
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "ذخیره اطلاعات با خطا مواجه شد",
                });
            }
        }

        [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
        [HttpGet("params/{contentId:int}")]
        public async Task<ActionResult> Params([FromRoute] int contentId)
        {
            try
            {
                var content = await Db.QuerySingleAsync(
                    @"select parameters as params,name + ' ' + cast(libraries.major_version as varchar)+ '.' + cast(libraries.minor_version as varchar) as library from contents
                    join libraries on contents.library_id = libraries.id where contents.id=@id",
                    new {id = contentId});
                return Json(content);
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

        public List<int> LibraryDependencies(int libraryId)
        {
            var deps = Db.Query<LibraryDeps>(@$"WITH library_deps AS (
                                              select required_library_id, 1 as depth
                                              from library_library
                                              where library_id = {libraryId}
                                              and dependency_type = 'preloaded'
                                              UNION ALL
                                              select library_library.required_library_id, library_deps.depth + 1
                                              from library_deps
                                              join library_library on library_deps.required_library_id = library_library.library_id )
                                              SELECT required_library_id as library_id
                                              FROM library_deps
                                              order by depth desc");
            return deps.Select(lib => lib.library_id).Distinct().Append(libraryId).ToList();
        }

        public List<int> LibraryAddons(int libraryId, List<int> blacklist)
        {
            var deps = Db.Query<LibraryDeps>(@$"WITH addon_deps AS (
                                              select required_library_id, 1 as depth
                                              from library_library
                                              where library_id = @libraryId
                                              and dependency_type = 'preloaded'
                                              and required_library_id not in @blacklist
                                              UNION ALL
                                              select library_library.required_library_id, addon_deps.depth + 1
                                              from addon_deps
                                              join library_library on addon_deps.required_library_id = library_library.library_id
                                              where library_library.required_library_id not in @blacklist and dependency_type='preloaded' )
                                              SELECT required_library_id as library_id
                                              FROM addon_deps
                                              order by depth desc", new {blacklist, libraryId});
            return deps.Select(lib => lib.library_id).Distinct().Append(libraryId).ToList();
        }
    }
}