using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repository;

public class TodoRepository : ITodoRepository
{
    private readonly DataContext _context;
    
    public TodoRepository(DataContext context)
    {
        _context = context;
    }

    public ICollection<Todo> GetTodos()
    {
        return _context.Todos.OrderBy(todo => todo.Id).ToList();
    }
}