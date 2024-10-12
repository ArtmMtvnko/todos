using backend.src.Models;
using backend.src.Models.Dto;

namespace backend.src.Interfaces;

public interface ITodoService
{
    Task<bool> TodoExist(Guid todoId);
    Task<IEnumerable<Todo>> GetTodos();
    Task<Todo> GetTodoById(Guid todoId);
    Task<Todo> CreateTodo(CreateTodoDto createTodoDto);
    Task<Todo> UpdateTodo(Guid todoId, CreateTodoDto updateTodoDto);
    Task DeleteTodo(Guid todoId);
}