using System.Text.Json.Serialization;

namespace vianna_h5p.Models
{
    public class ContentParameters
    {
        [JsonPropertyName("params")] public object Params { get; set; }
        public object metadata { get; set; }
    }
}