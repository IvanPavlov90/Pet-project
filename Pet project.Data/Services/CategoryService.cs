using Pet_project.Data.Business_Objects;
using Pet_project.Data.Providers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pet_project.Data.Services
{
    class CategoryService : ICateogryService
    {
        private readonly ICategoryProvider _categoryProvider;

        public CategoryService(ICategoryProvider categoryProvider)
        {
            _categoryProvider = categoryProvider;
        }

        public async Task<List<CategoryBo>> GetCategories()
        {
            return await _categoryProvider.GetCategories();
        }
    }
}
