using System.ComponentModel.DataAnnotations;

namespace vianna_h5p.DTOs
{
    public class Setup
    {
        [Required(ErrorMessage = "لطفا آدرس هاست را وارد نمایید")]
        public string host { get; set; }

        [Required(ErrorMessage = "لطفا نام پایگاه داده را وارد نمایید")]
        public string database { get; set; }

        [Required(ErrorMessage = "لطفا نام کاربری پایگاه داده را وارد نمایید")]
        public string username { get; set; }

        [Required(ErrorMessage = "لطفا رمز عبور پایگاه داده را وارد نمایید")]
        public string password { get; set; }
    }
}