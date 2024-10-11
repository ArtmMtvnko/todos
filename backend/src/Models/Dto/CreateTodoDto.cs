namespace backend.src.Models.Dto;

public class CreateTodoDto
{
    public required string Title { get; set; }
    public Guid CategoryId { get; set; }
}