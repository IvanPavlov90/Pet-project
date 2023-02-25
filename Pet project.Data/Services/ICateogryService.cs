using Pet_project.Data.Business_Objects;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pet_project.Data.Services
{
    public interface ICateogryService
    {
        /// <summary>
        /// Метод для получения категорий из бд
        /// </summary>
        /// <returns>Возвращает список категорий</returns>
        Task<List<CategoryBo>> GetCategories();
    }
}
