using System.Text.Json.Serialization;

namespace vianna_h5p.Models
{
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        [JsonIgnore] private int role { get; set; }

        [JsonPropertyName("role")]
        public string Role => role == 0 ? "admin" : "user";

        [JsonIgnore] public string password { get; set; }
    }
}