#nullable enable
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using WebMarkupMin.Core;

namespace vianna_h5p.Helpers
{
    public static class AssetHelper
    {
        //regex for finding relative urls in css files
        private static readonly Regex RxUrl = new(@"url\s*\(\s*([""']?)([^:)]+)\1\s*\)",
            RegexOptions.IgnoreCase | RegexOptions.Compiled);

        private const string Protocol = "file:///";

        public static string FixCssRelativePaths(string content, string outputPath)
        {
            // apply the RegEx to the file (to change relative paths)
            var matches = RxUrl.Matches(content);

            // Ignore the file if no match
            if (matches.Count <= 0) return content;
            var cssDirectoryPath = Path.GetDirectoryName(outputPath);

            foreach (Match match in matches)
            {
                var quoteDelimiter = match.Groups[1].Value; //url('') vs url("")
                var urlValue = match.Groups[2].Value;

                // Ignore root relative references
                if (urlValue.StartsWith("/", StringComparison.Ordinal) || urlValue.StartsWith("data:"))
                    continue;

                //prevent query string from causing error
                var pathAndQuery = urlValue.Split(new[] {'?'}, 2, StringSplitOptions.RemoveEmptyEntries);
                var pathOnly = pathAndQuery[0];
                var queryOnly = pathAndQuery.Length == 2 ? pathAndQuery[1] : string.Empty;

                var absolutePath = GetAbsolutePath(cssDirectoryPath, pathOnly);
                var serverRelativeUrl = MakeRelative(outputPath, absolutePath);

                if (!string.IsNullOrEmpty(queryOnly))
                {
                    serverRelativeUrl += "?" + queryOnly;
                }

                var replace = string.Format("url({0}{1}{0})", quoteDelimiter, serverRelativeUrl);

                content = content.Replace(match.Groups[0].Value, replace);
            }

            return content;
        }

        private static string GetAbsolutePath(string cssFilePath, string pathOnly)
        {
            return Path.GetFullPath(Path.Combine(cssFilePath, pathOnly));
        }

        private static string MakeRelative(string baseFile, string file)
        {
            if (string.IsNullOrEmpty(file))
                return file;
            var baseUri = new Uri(Protocol + baseFile, UriKind.RelativeOrAbsolute);
            var fileUri = new Uri(Protocol + file, UriKind.RelativeOrAbsolute);
            return baseUri.IsAbsoluteUri
                ? Uri.UnescapeDataString(baseUri.MakeRelativeUri(fileUri).ToString())
                : baseUri.ToString();
        }

        public static string BundleAsset(string type, List<string> inputFilesPaths, string? outputFileName = null,
            string? outputPath = null)
        {
            string? bundle = null;
            foreach (var asset in inputFilesPaths)
            {
                bundle += File.ReadAllText(asset, Encoding.UTF8);
                switch (type)
                {
                    case "css":
                        bundle += "\n";
                        break;
                    case "js":
                        bundle += ";\n";
                        break;
                }
            }

            if (outputFileName != null && outputPath != null)
            {
                if (!Directory.Exists(outputPath))
                {
                    Directory.CreateDirectory(outputPath);
                }

                var bundlePath = $"{outputPath}/{outputFileName}.{type}";
                if (File.Exists(bundlePath))
                {
                    File.Delete(bundlePath);
                }

                File.WriteAllText(bundlePath, bundle);
            }

            return bundle;
        }

        public static string MinifyAsset(string type, string content, string? outputPath = null)
        {
            string minifedContent = type switch
            {
                "css" => new KristensenCssMinifier().Minify(content, false).MinifiedContent,
                "js" => new CrockfordJsMinifier().Minify(content, false).MinifiedContent,
                _ => new KristensenCssMinifier().Minify(content, false).MinifiedContent
            };
            if (outputPath != null)
                File.WriteAllText(outputPath, minifedContent);
            return minifedContent;
        }

        public static string BundleAndMinify(string type, List<string> inputFilesPaths, string outputPath)
        {
            var bundled = BundleAsset(type, inputFilesPaths);
            if (type == "css")
            {
                bundled = FixCssRelativePaths(bundled, outputPath);
            }

            return MinifyAsset(type, bundled);
        }
    }
}