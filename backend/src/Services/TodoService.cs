using backend.src.Interfaces;
using backend.src.Models;

namespace backend.src.Services;

public class TodoService
{
    private readonly ITodoRepository _todoRepository;

    public TodoService(ITodoRepository todoRepository)
    {
        _todoRepository = todoRepository;
    }

    public IEnumerable<Todo> GetTodos()
    {
        var todos = _todoRepository.GetTodos();
        return todos;
    }

    public Todo GetTodoById(Guid todoId)
    {
        var todo = _todoRepository.GetTodoById(todoId);
        return todo;
    }
}