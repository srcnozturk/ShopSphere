using System.ComponentModel.DataAnnotations;

namespace ShopSphere.API.Dtos;

public class LoginDto
{
    [Required]
    public string UserName { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
    public string Email { get; set; }
}
