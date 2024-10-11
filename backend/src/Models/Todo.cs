namespace backend.src.Models;

public class Todo
{
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public DateTime CreatedAt { get; set; }
    public Guid CategoryId { get; set; }
    public required Category Category { get; set; }
}