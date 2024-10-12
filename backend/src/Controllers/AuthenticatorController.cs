using backend.src.Models;
using backend.src.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.src.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    private readonly IAuthenticationService _authService;

    public AuthenticationController(IAuthenticationService authService)
    {
        _authService = authService;
    }
    
    [HttpPost("login")]
    public IActionResult Login([FromBody] Login login)
    {
        if (login.Username != "admin" || login.Password != "admin")
            return Unauthorized();

        var token = _authService.GenerateJwtToken("Admin Adminson");
        return Ok(new { Token = token });
    }
}