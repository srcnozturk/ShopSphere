using Microsoft.AspNetCore.Mvc;

namespace ShopSphere.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ErrorController : ControllerBase
{
    [HttpGet("not-found")]
    public IActionResult NotFoundError()
    {
        return NotFound(); //404
    }
    [HttpGet("bad-request")]
    public IActionResult BadRequestError()
    {
        return BadRequest(); //400
    }
    [HttpGet("unauthorized")]
    public IActionResult UnauthorizedError()
    {
        return Unauthorized(); //401
    }
    [HttpGet("server-error")]
    public IActionResult ServerError()
    {
        throw new Exception("server-error"); //401
    }
    [HttpGet("validation-error")]
    public IActionResult ValidationError()
    {
        ModelState.AddModelError("validation-error", "This is a validation error");
        ModelState.AddModelError("validation-error2", "This is a validation error2");
        return ValidationProblem(); //400
    }
}
