using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Pet_project.Data.Business_Objects;
using Pet_project.Data.Services;
using Pet_project.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pet_project.Controllers
{
    public class HomeController : Controller
    {
        private readonly ICateogryService _categoryService;
        private readonly IMapper _mapper;

        public HomeController(ICateogryService categoryService, IMapper mapper)
        {
            _categoryService = categoryService;
            _mapper = mapper;
        }

        public async Task<List<CategoryDto>> GetCategories() 
        {
            List<CategoryBo> categories = await _categoryService.GetCategories();
            return _mapper.Map<List<CategoryDto>>(categories);
        }
    }
}
