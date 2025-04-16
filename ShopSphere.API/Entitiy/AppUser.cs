using Microsoft.AspNetCore.Identity;

namespace ShopSphere.API.Entitiy;

public class AppUser : IdentityUser
{
    public string? Name { get; set; }
}
