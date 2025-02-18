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

    private async Task<bool> Save()
    {
        var saved = await _context.SaveChangesAsync();
        return saved > 0 ? true : false;
    }

    public async Task<bool> TodoExist(Guid todoId) {
        return await _context.Todos.AnyAsync(todo => todo.Id == todoId);
    }

    public async Task<ICollection<Todo>> GetTodos()
    {
        return await _context.Todos
            .OrderBy(todo => todo.CreatedAt)
            .Include(todo => todo.Category)
            .ToListAsync();
    }

    public async Task<Todo> GetTodoById(Guid todoId)
    {
        return await _context.Todos
            .Where(todo => todo.Id == todoId)
            .Include(todo => todo.Category)
            .FirstAsync();
    }

    public async Task<Todo> CreateTodo(CreateTodoDto createTodoDto)
    {        
        var createdTodo = new Todo()
        {
            Id = Guid.NewGuid(),
            Title = createTodoDto.Title,
            CreatedAt = DateTime.UtcNow,
            CategoryId = createTodoDto.CategoryId,
            Category = _context.Categories
                .Where(c => c.Id == createTodoDto.CategoryId)
                .First()
        };

        await _context.Todos.AddAsync(createdTodo);

        bool saved = await Save();

        if (!saved)
            throw new Exception("Data was not saved. Something went wrong");

        return createdTodo;
    }

    public async Task<Todo> UpdateTodo(Guid todoId, CreateTodoDto updateTodoDto)
    {
        var existedTodo = await GetTodoById(todoId);

        if (existedTodo == null)
            throw new Exception($"Entity with id [{todoId}] has not been found");

        existedTodo.Title = updateTodoDto.Title;
        existedTodo.CategoryId = updateTodoDto.CategoryId;

        bool saved = await Save();

        if (!saved)
            throw new Exception("Data was not saved. Something went wrong");

        return existedTodo;
    }

    public async Task DeleteTodo(Guid todoId)
    {
        var todoToRemove = await _context.Todos.FindAsync(todoId);

        if (todoToRemove == null)
            throw new Exception($"Entity with id [{todoId}] has not been found");
        
        _context.Todos.Remove(todoToRemove);

        bool saved = await Save();

        if (!saved)
            throw new Exception("Data was not saved. Something went wrong");
    }
}