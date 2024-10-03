using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class TodoController : Controller
{
    private readonly TodoService _todoService;
    
    public TodoController(TodoService todoService)
    {
        _todoService = todoService;
    }
    
    [HttpGet]
    public IActionResult GetAll()
    {
        var todos = _todoService.GetTodos();

        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        return Ok(todos);
    }
}