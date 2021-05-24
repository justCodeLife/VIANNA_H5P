#nullable enable
using System;
using System.Data;
using System.IO;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using vianna_h5p.DTOs;
using vianna_h5p.Helpers;
using vianna_h5p.Middlewares;
using vianna_h5p.Models;

namespace vianna_h5p.Controllers
{
    [CheckProdMode]
    [MiddlewareFilter(typeof(JWTMiddlewareAnnotation))]
    [Route("api/users")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IDbConnection _db;
        private readonly IWebHostEnvironment _env;

        public UsersController(IDbConnection db, IWebHostEnvironment env)
        {
            _db = db;
            _env = env;
        }

        [HttpGet]
        public async Task<ActionResult> Index()
        {
            try
            {
                var users = await _db.QueryAsync("select id,name,username from users where role=1");
                return Json(users);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "عملیات با خطا مواجه شد"
                });
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetUser([FromRoute] int id)
        {
            try
            {
                var user = await _db.QuerySingleAsync("select name,username from users where id=@id", new {id});
                if (user == null || Convert.IsDBNull(user))
                {
                    return Json(new
                    {
                        error = "کاربر مورد نظر یافت نشد"
                    });
                }

                return Json(user);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "عملیات با خطا مواجه شد"
                });
            }
        }

        [HttpPost]
        public async Task<ActionResult> Add([FromBody] UserRequest request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(new {error = "لطفا تمامی فیلد ها را وارد نمایید"});
                }

                await _db.ExecuteAsync(
                    "insert into users (name, username, password) values (@name,@username,@password)",
                    new {request.name, request.username, request.password});
                Directory.CreateDirectory(_env.ContentRootPath + $"/Public/h5ps/{request.username}");
                return Json(new
                {
                    success = true,
                    msg = "عملیات با موفقیت انجام شد"
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "عملیات با خطا مواجه شد"
                });
            }
        }

        [HttpPut]
        public async Task<ActionResult> Edit([FromBody] UserRequest request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Json(new {error = "لطفا تمامی فیلد ها را وارد کنید"});
                }

                if (request.id == null)
                {
                    return Json(new
                    {
                        error = "شناسه کاربر نامعتبر می باشد"
                    });
                }

                var user = await _db.QuerySingleAsync<User>("select username from users where id=@id",
                    new {request.id});

                await _db.ExecuteAsync("update users set name=@name,username=@username,password=@password where id=@id",
                    new {request.name, request.username, request.password, request.id});

                if (request.username != user.username &&
                    Directory.Exists(_env.ContentRootPath + $"/Public/h5ps/{user.username}"))
                {
                    Directory.Move(_env.ContentRootPath + $"/Public/h5ps/{user.username}",
                        _env.ContentRootPath + $"/Public/h5ps/{request.username}");
                }

                return Json(new
                {
                    success = true,
                    msg = "عملیات با موفقیت انجام شد"
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "عملیات با خطا مواجه شد"
                });
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete([FromRoute] int? id)
        {
            try
            {
                if (id == null)
                {
                    return Json(new
                    {
                        error = "شناسه کاربر نامعتبر می باشد"
                    });
                }

                var user = await _db.QuerySingleAsync<User>("select username from users where id=@id", new {id});
                await _db.ExecuteAsync("delete from users where id=@id", new {id});
                Directory.Delete(_env.ContentRootPath + $"/Public/h5ps/{user.username}", true);
                return Json(new
                {
                    success = true,
                    msg = "عملیات با موفقیت انجام شد"
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Json(new
                {
                    error = "عملیات با خطا مواجه شد"
                });
            }
        }
    }
}