#nullable enable
using System.Text.Json.Serialization;
using Utf8Json;

namespace vianna_h5p.Models
{
    public class ContentType
    {
        [JsonIgnore] private string? keywords { get; set; }
        [JsonIgnore] private string? screenshots { get; set; }
        [JsonPropertyName("createdAt")] public int created_at { get; set; }
        [JsonPropertyName("description")] public string description { get; set; }
        [JsonPropertyName("example")] public string example { get; set; }
        [JsonPropertyName("h5pMajorVersion")] public int h5p_major_version { get; set; }
        [JsonPropertyName("h5pMinorVersion")] public int h5p_minor_version { get; set; }
        [JsonPropertyName("icon")] public string icon { get; set; }
        [JsonPropertyName("keywords")] public string[]? Keyword => JsonSerializer.Deserialize<string[]>(keywords);
        [JsonPropertyName("machineName")] public string machine_name { get; set; }
        [JsonPropertyName("majorVersion")] public int major_version { get; set; }
        [JsonPropertyName("minorVersion")] public int minor_version { get; set; }
        [JsonPropertyName("patchVersion")] public int patch_version { get; set; }
        [JsonPropertyName("popularity")] public int popularity { get; set; }

        [JsonPropertyName("screenshots")]
        public object[]? Screenshot => JsonSerializer.Deserialize<object[]>(screenshots);

        [JsonPropertyName("summary")] public string summary { get; set; }
        [JsonPropertyName("title")] public string title { get; set; }
        [JsonPropertyName("tutorial")] public string tutorial { get; set; }
        [JsonPropertyName("installed")] public bool installed => true;
        [JsonPropertyName("isUpToDate")] public bool isUpToDate => true;

        [JsonPropertyName("localMajorVersion")]
        public int local_major_version => major_version;

        [JsonPropertyName("localMinorVersion")]
        public int local_minor_version => minor_version;

        [JsonPropertyName("localPatchVersion")]
        public int local_patch_version => patch_version;
    }
}