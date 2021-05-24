using System.ComponentModel.DataAnnotations;

namespace vianna_h5p.DTOs
{
    public class UserRequest
    {
        public int? id { get; set; }

        [Required(ErrorMessage = "نام نامعتبر است")]
        [MaxLength(50, ErrorMessage = "تعداد حروف نام بیش از حد مجاز است")]
        [MinLength(4, ErrorMessage = "تعداد حروف نام کمتر از حد مجاز است")]
        public string name { get; set; }

        [Required(ErrorMessage = "نام کاربری نامعتبر است")]
        [MaxLength(50, ErrorMessage = "تعداد حروف نام کاربری بیش از حد مجاز است")]
        [MinLength(4, ErrorMessage = "تعداد حروف نام کاربری کمتر ازحد مجاز است")]
        public string username { get; set; }

        [Required(ErrorMessage = "رمز عبور نامعتبر است")]
        [MaxLength(50, ErrorMessage = "تعداد حروف رمز عبور بیش از حد مجاز است")]
        [MinLength(4, ErrorMessage = "تعداد حروف رمز عبور کمتر از حد مجاز است")]
        public string password { get; set; }
    }
}