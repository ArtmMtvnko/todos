using backend.src.Models.Dto;

namespace backend.src.Interfaces;

public interface ITodoRepository
{
    Task<ICollection<TodoDto>> GetTodos();
    Task<TodoDto> GetTodoById(Guid todoId);
    Task<TodoDto> CreateTodo(CreateTodoDto createTodoDto);
    Task<TodoDto> UpdateTodo(Guid todoId, CreateTodoDto updateTodoDto);
}