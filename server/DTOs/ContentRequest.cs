#nullable enable
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace vianna_h5p.DTOs
{
    public class ContentRequest
    {
        public int? contentId { get; set; }
        public string? title { get; set; }

        [Required(ErrorMessage = "شناسه کاربر نامعتبر می باشد")]
        public int? user_id { get; set; }

        public string? library { get; set; }
        
        [JsonPropertyName("params")] public JsonDocument? Params { get; set; }
    }
}