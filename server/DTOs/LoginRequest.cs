using System.ComponentModel.DataAnnotations;

namespace vianna_h5p.DTOs
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "نام کاربری نامعتبر است")]
        public string username { get; set; }

        [Required(ErrorMessage = "رمز عبور نامعتبر است")]
        public string password { get; set; }
    }
}