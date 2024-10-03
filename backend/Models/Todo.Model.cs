namespace backend.Models;

public class Todo
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public Category Category { get; set; } // TODO: set to required
}