using backend.src.Data;
using backend.src.Interfaces;
using backend.src.Models;
using backend.src.Models.Dto;
using Microsoft.EntityFrameworkCore;

namespace backend.src.Repository;

public class TodoRepository : ITodoRepository
{
    private readonly DataContext _context;
    
    public TodoRepository(DataContext context)
    {
        _context = context;
    }

    public ICollection<Todo> GetTodos()
    {
        return _context.Todos
            .OrderBy(todo => todo.CreatedAt)
            .Include(todo => todo.Category)
            .ToList();
    }

    public Todo GetTodoById(Guid todoId)
    {
        return _context.Todos
            .Where(todo => todo.Id == todoId)
            .First();
    }

    public Todo CreateTodo(CreateTodoDto createTodoDto)
    {
        throw new NotImplementedException();
    }
}