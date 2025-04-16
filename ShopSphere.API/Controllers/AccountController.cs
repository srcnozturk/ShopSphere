﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ShopSphere.API.Dtos;
using ShopSphere.API.Entitiy;

namespace ShopSphere.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;

    public AccountController(UserManager<AppUser> userManager)
    {
        _userManager = userManager;
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
            return Ok(new { token = "token" }); 

        return Unauthorized();
    }
}
