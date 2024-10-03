using backend.DTOs;
using backend.Models;

namespace backend.Interfaces;

public interface ITodoRepository
{
    ICollection<Todo> GetTodos();

    // Todo GetTodoById(int todoId);

    // Todo CreateTodo(TodoDto todoDto);
}