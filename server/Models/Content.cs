#nullable enable
using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace vianna_h5p.Models
{
    public class Content
    {
        public int? id { get; set; }

        [JsonIgnore] private DateTime? created_at { get; set; }

        [JsonPropertyName("created_at")] public string? date => created_at?.ToPersianDigitalDateTimeString();

        public int? user_id { get; set; }
        public string? title { get; set; }
        public int? library_id { get; set; }
        [JsonIgnore] public string? parameters { get; set; }
        public ContentParameters? Parameters => JsonSerializer.Deserialize<ContentParameters>(parameters!);
    }
}