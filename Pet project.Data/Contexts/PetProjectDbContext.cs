using Microsoft.EntityFrameworkCore;
using Pet_project.Data.Models;

namespace Pet_project.Data.Contexts
{
    internal class PetProjectDbContext : DbContext
    {
        public DbSet<CategoryEntity> Categories { get; set; }
    }
}
