using backend.Models;

namespace backend.DTOs;

public class TodoDto
{
    public required string Title { get; set; }
    public required string Content { get; set; }
    public required Category Category { get; set; }
}