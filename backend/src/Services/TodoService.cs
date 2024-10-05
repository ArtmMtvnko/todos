using backend.src.Interfaces;
using backend.src.Models.Dto;

namespace backend.src.Services;

public class TodoService : ITodoService
{
    private readonly ITodoRepository _todoRepository;

    public TodoService(ITodoRepository todoRepository)
    {
        _todoRepository = todoRepository;
    }

    public async Task<IEnumerable<TodoDto>> GetTodos()
    {
        var todos = await _todoRepository.GetTodos();
        return todos;
    }

    public async Task<TodoDto> GetTodoById(Guid todoId)
    {
        var todo = await _todoRepository.GetTodoById(todoId);
        return todo;
    }

    public async Task<TodoDto> CreateTodo(CreateTodoDto createTodoDto)
    {
        var createdTodo = await _todoRepository.CreateTodo(createTodoDto);
        return createdTodo;
    }
}