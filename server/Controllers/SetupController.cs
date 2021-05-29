using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using vianna_h5p.DTOs;
using vianna_h5p.Helpers;

namespace vianna_h5p.Controllers
{
    [CheckDebugMode]
    public class SetupController : Controller
    {
        private IDbConnection _db { get; }

        private readonly IWebHostEnvironment _env;

        public SetupController(IWebHostEnvironment env, IDbConnection db)
        {
            _env = env;
            _db = db;
        }
        
        [HttpGet("/setup")]
        public ActionResult Setup()
        {
            return View("/Views/Setup.cshtml");
        }

        [HttpPost("/setup")]
        public async Task<ActionResult> Install(Setup request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(new
                    {
                        error = "لطفا تمامی فیلد ها را وارد کنید"
                    });
                }

                Environment.SetEnvironmentVariable("DB_HOST", request.host);
                Environment.SetEnvironmentVariable("DB_DATABASE", request.database);
                Environment.SetEnvironmentVariable("DB_USERNAME", request.username);
                Environment.SetEnvironmentVariable("DB_PASSWORD", request.password);
                Environment.SetEnvironmentVariable("IS_INSTALLED", "true");

                //get all variables in .env file as key values
                var env = (await System.IO.File.ReadAllLinesAsync(_env.ContentRootPath + "/.env"))
                    .Where(x => !x.StartsWith("#") && !string.IsNullOrEmpty(x))
                    .Select(x => x.Split('=')).ToDictionary(x => x[0], x => x[1]);

                env["DB_HOST"] = request.host;
                env["DB_DATABASE"] = request.database;
                env["DB_USERNAME"] = request.username;
                env["DB_PASSWORD"] = request.password;
                env["IS_INSTALLED"] = "true";

                await System.IO.File.WriteAllLinesAsync(_env.ContentRootPath + "/.env",
                    env.Select(x => $"{x.Key}={x.Value}"));

                await _db.ExecuteAsync("");

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

        [HttpGet("/cache")]
        public async Task<ActionResult> CacheCoreAndEditorAssets()
        {
            try
            {
                var h5PCoreStyles = new List<string>
                {
                    "/styles/core/h5p.css",
                    "/styles/core/h5p-confirmation-dialog.css",
                    "/styles/core/h5p-core-button.css",
                };
                var h5PCoreScripts = new List<string>
                {
                    "/scripts/core/jquery.js",
                    "/scripts/core/h5p.js",
                    "/scripts/core/h5p-event-dispatcher.js",
                    "/scripts/core/h5p-x-api-event.js",
                    "/scripts/core/h5p-x-api.js",
                    "/scripts/core/h5p-content-type.js",
                    "/scripts/core/h5p-confirmation-dialog.js",
                    "/scripts/core/h5p-action-bar.js",
                    "/scripts/core/request-queue.js"
                };
                var h5PEditorStyles = new List<string>
                {
                    "/styles/editor/libs/darkroom.css",
                    "/styles/editor/h5p-hub-client.css",
                    "/styles/editor/fonts.css",
                    "/styles/editor/application.css",
                    "/styles/editor/libs/zebra_datepicker.min.css"
                };
                var h5PEditorScripts = new List<string>
                {
                    "/scripts/editor/h5peditor-editor.js",
                    "/scripts/editor/h5peditor.js",
                    "/scripts/editor/language/fa.js",
                    "/scripts/editor/h5p-hub-client.js",
                    "/scripts/editor/h5peditor-semantic-structure.js",
                    "/scripts/editor/h5peditor-library-selector.js",
                    "/scripts/editor/h5peditor-fullscreen-bar.js",
                    "/scripts/editor/h5peditor-form.js",
                    "/scripts/editor/h5peditor-text.js",
                    "/scripts/editor/h5peditor-html.js",
                    "/scripts/editor/h5peditor-number.js",
                    "/scripts/editor/h5peditor-textarea.js",
                    "/scripts/editor/h5peditor-file-uploader.js",
                    "/scripts/editor/h5peditor-file.js",
                    "/scripts/editor/h5peditor-image.js",
                    "/scripts/editor/h5peditor-image-popup.js",
                    "/scripts/editor/h5peditor-av.js",
                    "/scripts/editor/h5peditor-group.js",
                    "/scripts/editor/h5peditor-boolean.js",
                    "/scripts/editor/h5peditor-list.js",
                    "/scripts/editor/h5peditor-list-editor.js",
                    "/scripts/editor/h5peditor-library.js",
                    "/scripts/editor/h5peditor-library-list-cache.js",
                    "/scripts/editor/h5peditor-select.js",
                    "/scripts/editor/h5peditor-selector-hub.js",
                    "/scripts/editor/h5peditor-selector-legacy.js",
                    "/scripts/editor/h5peditor-dimensions.js",
                    "/scripts/editor/h5peditor-coordinates.js",
                    "/scripts/editor/h5peditor-none.js",
                    "/scripts/editor/h5peditor-metadata.js",
                    "/scripts/editor/h5peditor-metadata-author-widget.js",
                    "/scripts/editor/h5peditor-metadata-changelog-widget.js",
                    "/scripts/editor/h5peditor-pre-save.js",
                    "/scripts/editor/ckeditor/ckeditor.js"
                };
                var coreCachePath = $"{_env.ContentRootPath}/Public/cache/core";
                var editorCachePath = $"{_env.ContentRootPath}/Public/cache/editor";
                if (!Directory.Exists(coreCachePath))
                {
                    Directory.CreateDirectory(coreCachePath);
                }

                if (!Directory.Exists(editorCachePath))
                {
                    Directory.CreateDirectory(editorCachePath);
                }

                var bundledCoreCss = AssetHelper.BundleAsset("css",
                    h5PCoreStyles.Select(a => $"{_env.ContentRootPath}/Public/{a}").ToList());
                var bundledEditorCss = AssetHelper.BundleAsset("css",
                    h5PEditorStyles.Select(a => $"{_env.ContentRootPath}/Public/{a}").ToList());
                var bundledCoreJs = AssetHelper.BundleAsset("js",
                    h5PCoreScripts.Select(a => $"{_env.ContentRootPath}/Public/{a}").ToList());
                var bundledEditorJs = AssetHelper.BundleAsset("js",
                    h5PEditorScripts.Select(a => $"{_env.ContentRootPath}/Public/{a}").ToList());

                var fixedCoreCss = AssetHelper.FixCssRelativePaths(bundledCoreCss, coreCachePath);
                var fixedEditorCss = AssetHelper.FixCssRelativePaths(bundledEditorCss, editorCachePath);

                var minifiedCoreCss = AssetHelper.MinifyAsset("css", fixedCoreCss);
                var minifiedEditorCss = AssetHelper.MinifyAsset("css", fixedEditorCss);
                var minifiedCoreJs = AssetHelper.MinifyAsset("js", bundledCoreJs);
                var minifiedEditorJs = AssetHelper.MinifyAsset("js", bundledEditorJs);

                await System.IO.File.WriteAllTextAsync(coreCachePath + "/core.min.css", minifiedCoreCss);
                await System.IO.File.WriteAllTextAsync(editorCachePath + "/editor.min.css", minifiedEditorCss);
                await System.IO.File.WriteAllTextAsync(coreCachePath + "/core.min.js", minifiedCoreJs);
                await System.IO.File.WriteAllTextAsync(editorCachePath + "/editor.min.js", minifiedEditorJs);
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
    }
}