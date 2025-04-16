using Microsoft.AspNetCore.Identity;
using ShopSphere.API.Entitiy;

namespace ShopSphere.API.Data;

public static class SeedData
{
    public static async void Initialize(IApplicationBuilder app)
    {
        var userManager = app.ApplicationServices.CreateScope()
            .ServiceProvider.GetRequiredService<UserManager<AppUser>>();

        var roleManager = app.ApplicationServices.CreateScope()
            .ServiceProvider.GetRequiredService<RoleManager<AppRole>>();

        if(!roleManager.Roles.Any())
        {
            var role = new AppRole { Name = "Admin" };
            var customer = new AppRole { Name = "Customer" };

            await roleManager.CreateAsync(role);
            await roleManager.CreateAsync(customer);
        }
        if (!userManager.Users.Any())
        {
            var customer = new AppUser { Name = "Test Müşteri Kullanıcısı",UserName ="testcustomer", Email="testcustomer@gmail.com" };
            var admin = new AppUser { Name = "Test Admin Kullanıcısı",UserName ="testadmin", Email="testadmin@gmail.com" };

            await userManager.CreateAsync(customer, "Test1234!");
            await userManager.AddToRoleAsync(customer, "Customer");

            await userManager.CreateAsync(admin, "Test1234!");
            await userManager.AddToRoleAsync(admin, "Admin");
        }
    }
}
