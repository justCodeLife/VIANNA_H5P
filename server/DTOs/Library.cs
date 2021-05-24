#nullable enable
using System.Collections.Generic;
using System.Dynamic;
using vianna_h5p.Models;

namespace vianna_h5p.DTOs
{
    public class Library
    {
        public string? name { get; set; }
        public object? version { get; set; }
        public string? title { get; set; }
        public string? upgradesScript { get; set; }
        public List<dynamic>? semantics { get; set; }
        public string? language { get; set; }
        public string? defaultLanguage => null;
        public string[]? languages { get; set; }
        public Dictionary<string?, dynamic> translations { get; set; }
        public List<string>? javascript { get; set; }
        public List<string>? css { get; set; }
    }
}