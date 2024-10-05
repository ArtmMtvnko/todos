using backend.src.Models.Dto;

namespace backend.src.Interfaces;

public interface ITodoRepository
{
    ICollection<TodoDto> GetTodos();

    TodoDto GetTodoById(Guid todoId);

    TodoDto CreateTodo(CreateTodoDto createTodoDto);
}