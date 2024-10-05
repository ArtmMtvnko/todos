namespace backend.src.Models.Dto;

public class CategoryDto
{
    public required Guid Id { get; set; }
    public required string Name { get; set; }
    public required DateTime CreatedAt { get; set; }
}