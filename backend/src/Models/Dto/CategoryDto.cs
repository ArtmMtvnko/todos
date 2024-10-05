namespace backend.src.Models.Dto;

public class CategoryDto
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public DateTime CreatedAt { get; set; }
}