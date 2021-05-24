#nullable enable
namespace vianna_h5p.Models
{
    public class LibraryLibrary
    {
        public int library_id { get; set; }
        public int required_library_id { get; set; }
        public string? dependency_type { get; set; }
    }
}