#nullable enable
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using vianna_h5p.Helpers;

namespace vianna_h5p.DTOs
{
    public class FileUpload
    {
        [Required(ErrorMessage = "فایل نامعتبر می باشد")]
        [MaxFileSize(20 * 1024 * 1024)]
        [AllowedExtensions(new[]
        {
            ".json", ".png", ".jpg", ".jpeg", ".gif", ".bmp", ".tif", ".tiff", ".svg",
            ".ttf", ".woff", ".woff2", ".webm", ".mp4", ".ogg", ".mp3", ".m4a", ".wav", ".txt",
            ".pdf", ".rtf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".xml", ".csv", ".swf"
        })]
        public IFormFile file { get; set; }

        public object? field { get; set; }
        public int? contentId { get; set; }
    }
}