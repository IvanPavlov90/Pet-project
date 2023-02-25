using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Pet_project.Data.Business_Objects;
using Pet_project.Data.Contexts;
using Pet_project.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pet_project.Data.Providers
{
    class CategoryProvider : ICategoryProvider
    {
        private readonly PetProjectDbContext _dbContext;
        private readonly IMapper _mapper;

        public CategoryProvider(IMapper mapper, PetProjectDbContext dbContext)
        {
            _mapper = mapper;
            _dbContext = dbContext;
        }

        public async Task<List<CategoryBo>> GetCategories()
        {
            List<CategoryEntity> categories = await _dbContext.Categories.ToListAsync();
            return _mapper.Map<List<CategoryBo>>(categories);
        }
    }
}
