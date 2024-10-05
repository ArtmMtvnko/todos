using backend.src.Interfaces;
using backend.src.Models.Dto;
using Microsoft.AspNetCore.Mvc;

namespace backend.src.Controllers;

[ApiController]
[Route("[controller]")]
public class TodoController : Controller
{
    private readonly ITodoService _todoService;
    
    public TodoController(ITodoService todoService)
    {
        _todoService = todoService;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var todos = await _todoService.GetTodos();

        return Ok(todos);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] Guid id)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var todo = await _todoService.GetTodoById(id);

        if (todo == null)
            return NotFound();

        return Ok(todo);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateTodoDto createTodoDto)
    {
        if (createTodoDto == null)
            return BadRequest(ModelState);
        
        var createdTodo = await _todoService.CreateTodo(createTodoDto);
        return Ok(createdTodo);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] CreateTodoDto updateTodoDto)
    {
        if (updateTodoDto == null)
            return BadRequest(ModelState);

        var updatedTodoDto = await _todoService.UpdateTodo(id, updateTodoDto);
        return Ok(updatedTodoDto);
    }
}