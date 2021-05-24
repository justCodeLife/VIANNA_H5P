#nullable enable
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Utf8Json;

namespace vianna_h5p.Models
{
    public class Library
    {
        public int id { get; set; }
        [JsonPropertyName("createdAt")] public DateTime? created_at { get; set; }
        [JsonPropertyName("description")] public string? description { get; set; }
        [JsonPropertyName("title")] public string? title { get; set; }
        [JsonPropertyName("runnable")] public int? runnable { get; set; }
        [JsonPropertyName("fullscreen")] public int? fullscreen { get; set; }
        [JsonPropertyName("semantics")] public string? semantics { get; set; }
        [JsonPropertyName("tutorial_url")] public string? tutorial_url { get; set; }
        [JsonPropertyName("has_icon")] public int? has_icon { get; set; }
        [JsonPropertyName("coreApi")] public object? coreApi { get; set; }
        [JsonPropertyName("preloadedDependencies")]
        public List<Library>? preloadedDependencies { get; set; }
        [JsonPropertyName("editorDependencies")]
        public List<Library>? editorDependencies { get; set; }
        [JsonIgnore] public string? embed_types { get; set; }
        [JsonPropertyName("embed_types")]
        public string[]? EmbedTypes => embed_types != null ? JsonSerializer.Deserialize<string[]>(embed_types) : null;
        [JsonPropertyName("machineName")] public string? machineName { get; set; }
        [JsonPropertyName("majorVersion")] public int? majorVersion { get; set; }
        [JsonPropertyName("minorVersion")] public int? minorVersion { get; set; }
        [JsonPropertyName("patchVersion")] public int? patchVersion { get; set; }
        [JsonPropertyName("preloadedJs")] public string? preloadedJs { get; set; }
        [JsonPropertyName("preloadedCss")] public string? preloadedCss { get; set; }
        [JsonPropertyName("metadataSettings")] public object? metadataSettings { get; set; }
    }
}