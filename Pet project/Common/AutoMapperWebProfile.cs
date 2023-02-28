using AutoMapper;
using Pet_project.Data.Business_Objects;
using Pet_project.Dto;

namespace Pet_project.Common
{
    public class AutoMapperWebProfile : Profile
    {
        public AutoMapperWebProfile()
        {
            CreateMap<CategoryBo, CategoryDto>();
        }
    }
}
