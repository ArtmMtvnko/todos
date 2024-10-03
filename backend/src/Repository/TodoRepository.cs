using backend.Data;
using backend.Interfaces;
using backend.Models;
using backend.Models.Dto;

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

    public Todo GetTodoById(Guid todoId)
    {
        return _context.Todos.Where(todo => todo.Id == todoId).First();
    }

    public Todo CreateTodo(TodoDto todoDto)
    {
        throw new NotImplementedException();
    }
}