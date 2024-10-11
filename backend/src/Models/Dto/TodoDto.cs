namespace backend.src.Models.Dto;

public class TodoDto
{
    public required Guid Id { get; set; }
    public required string Title { get; set; }
    public required DateTime CreatedAt { get; set; }
    public required Guid CategoryId { get; set; }
    public required CategoryDto Category { get; set; }
}