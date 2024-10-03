using backend.src.Models;
using backend.src.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.src.Controllers;

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

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        var todo = _todoService.GetTodoById(id);

        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (todo == null)
            return NotFound();

        return Ok(todo);
    }
}