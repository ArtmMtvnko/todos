using backend.Models.Dto;
using backend.Models;

namespace backend.Interfaces;

public interface ITodoRepository
{
    ICollection<Todo> GetTodos();

    Todo GetTodoById(Guid todoId);

    Todo CreateTodo(TodoDto todoDto);
}