using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class TodoController : ControllerBase
{   
    [HttpGet]
    public List<Todo> GetAll()
    {
        return new List<Todo>()
        {
            new Todo() { Title = "Test", Content = "Test content" },
            new Todo() { Title = "Test 2", Content = "Test content 2" }
        };
    }
}