using backend.Interfaces;
using backend.Models;

namespace backend.Services;

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
}