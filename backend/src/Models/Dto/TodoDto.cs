namespace backend.src.Models.Dto;

public class TodoDto
{
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public required CategoryDto Category { get; set; }
}