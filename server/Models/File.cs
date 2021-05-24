using System;

namespace vianna_h5p.Models
{
    public class File
    {
        public int? id { get; set; }
        public int? user_id { get; set; }
        public int? content_id { get; set; }
        public string? type { get; set; }
        public string? path { get; set; }
        public DateTime? created_at { get; set; }
        public bool? is_draft { get; set; }
    }
}