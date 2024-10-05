using backend.src.Data;
using backend.src.Interfaces;
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

    public async Task<ICollection<TodoDto>> GetTodos()
    {
        return await _context.Todos
            .OrderBy(todo => todo.CreatedAt)
            .Include(todo => todo.Category)
            .ToListAsync();
    }

    public async Task<TodoDto> GetTodoById(Guid todoId)
    {
        return await _context.Todos
            .Where(todo => todo.Id == todoId)
            .Include(todo => todo.Category)
            .FirstAsync();
    }

    public Task<TodoDto> CreateTodo(CreateTodoDto createTodoDto)
    {
        throw new NotImplementedException();
    }
}