using Microsoft.EntityFrameworkCore;
using Pet_project.Data.Models;

namespace Pet_project.Data.Contexts
{
    public class PetProjectDbContext : DbContext
    {
		public DbSet<CategoryEntity> Categories { get; set; }

		public DbSet<GoodEntity> Goods { get; set; }

		public PetProjectDbContext(DbContextOptions<PetProjectDbContext> options) : base(options)
        { }
	}
}
