using AutoMapper;
using Pet_project.Data.Business_Objects;
using Pet_project.Data.Models;

namespace Pet_project.Data.Common
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CategoryEntity, CategoryBo>().ReverseMap();
        }
    }
}
