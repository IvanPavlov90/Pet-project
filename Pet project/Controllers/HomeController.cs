using Microsoft.AspNetCore.Mvc;
using Pet_project.Data.Business_Objects;
using Pet_project.Data.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pet_project.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICateogryService _categoryService;

        public HomeController(ICateogryService categoryService)
        {
            _categoryService = categoryService;
        }

        public async Task GetCategories() 
        {
            List<CategoryBo> categories = await _categoryService.GetCategories();
        }
    }
}
