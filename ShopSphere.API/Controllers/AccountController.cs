using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ShopSphere.API.Dtos;
using ShopSphere.API.Entitiy;
using ShopSphere.API.Services;

namespace ShopSphere.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly TokenService _tokenService;

    public AccountController(UserManager<AppUser> userManager, TokenService tokenService)
    {
        _userManager = userManager;
        _tokenService = tokenService;
    }
    [HttpPost]
    public async Task<IActionResult> Login(LoginDto loginDto)
    {
        var userByEmail = await _userManager.FindByEmailAsync(loginDto.Email);
        var userByUsername = await _userManager.FindByNameAsync(loginDto.UserName);

        if (userByUsername is null && userByEmail is null)
            return BadRequest(new { message = "Kullanıcı Bulunamadı!" });

        var user = userByUsername ?? userByEmail;

        var passwordIsValid = await _userManager.CheckPasswordAsync(user, loginDto.Password);

        if (passwordIsValid)
            return Ok(new { token =await _tokenService.GenerateToken(user) });

        return Unauthorized();
    }
    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto registerDto)
    {
        if(!ModelState.IsValid)
            return BadRequest(ModelState);

        var user = new AppUser
        {
            UserName = registerDto.UserName,
            Email = registerDto.Email,
            Name = registerDto.Name
        };

        var result = await _userManager.CreateAsync(user, registerDto.Password);
        if (result.Succeeded)
        {
            await _userManager.AddToRoleAsync(user, "Customer");
            return StatusCode(201);
        }
        return BadRequest(result.Errors);
    }
}
