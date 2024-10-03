using backend.src.Models.Dto;
using backend.src.Models;

namespace backend.src.Interfaces;

public interface ITodoRepository
{
    ICollection<Todo> GetTodos();

    Todo GetTodoById(Guid todoId);

    Todo CreateTodo(TodoDto todoDto);
}