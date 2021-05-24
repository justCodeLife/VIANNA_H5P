using Microsoft.AspNetCore.Mvc.Filters;
using System;
using DotNetEnv;

namespace vianna_h5p.Helpers
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class CheckProdModeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (Env.GetBool("IS_INSTALLED") == false)
            {
                context.HttpContext.Response.Redirect("/setup");
            }
        }
    }
}