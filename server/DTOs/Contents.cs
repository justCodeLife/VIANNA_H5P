#nullable enable
using System;
using System.Text.Json.Serialization;

namespace vianna_h5p.DTOs
{
    public class Contents
    {
        public int id { get; set; }
        public string? title { get; set; }
        public string library_name { get; set; }
        [JsonIgnore] private DateTime? created_at { get; set; }

        [JsonPropertyName("created_at")] public string? date => created_at?.ToPersianDigitalDateTimeString();
    }
}