using System.ComponentModel.DataAnnotations;

namespace ShopSphere.API.Dtos;

public record struct LoginDto
{
    [Required]
    public string UserName { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
    public string Email { get; set; }
}

public record struct RegisterDto
{
    [Required]
    public string UserName { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string Name { get; set; }
}
