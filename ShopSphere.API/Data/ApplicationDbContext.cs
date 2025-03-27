using Microsoft.EntityFrameworkCore;
using ShopSphere.API.Entitiy;

namespace ShopSphere.API.Data;

public class ApplicationDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<ProductModel> Products => Set<ProductModel>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<ProductModel>().HasData(
            new ProductModel
            {
                Id = Guid.Parse("63e2f02c-c529-4ee5-9eff-7dfe31288098"),
                Name = "Iphone 16",
                Description = "Iphone 16 Description",
                Price = 70000,
                isActive = true,
                ImageUrl = "1.png",
                Stock = 10
            },
            new ProductModel
            {
                Id = Guid.Parse("a7053963-5521-4672-bc8d-73faff51686f"),
                Name = "Iphone 15",
                Description = "Iphone 15 Description",
                Price = 60000,
                isActive = true,
                ImageUrl = "2.jpg",
                Stock = 20
            },
            new ProductModel
            {
                Id = Guid.Parse("1557224f-acc0-4bf4-a496-0ba39fe2cf44"),
                Name = "Iphone 14",
                Description = "Iphone 14 Description",
                Price = 50000,
                isActive = true,
                ImageUrl = "3.png",
                Stock = 30
            }
        );
    }
}
