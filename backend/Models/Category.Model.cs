namespace backend.Models;

public class Category
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public ICollection<Todo> Todos { get; set; } // TODO: set to required (or not)
}