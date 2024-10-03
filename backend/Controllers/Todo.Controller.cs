using backend.Models;
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
            new Todo() { Id = 1, Title = "Test", Content = "Test content" },
            new Todo() { Id = 2, Title = "Test 2", Content = "Test content 2" }
        };
    }
}