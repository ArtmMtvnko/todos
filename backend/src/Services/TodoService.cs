using backend.src.Interfaces;
using backend.src.Models;
using backend.src.Models.Dto;

namespace backend.src.Services;

public class TodoService : ITodoService
{
    private readonly ITodoRepository _todoRepository;

    public TodoService(ITodoRepository todoRepository)
    {
        _todoRepository = todoRepository;
    }

    public async Task<bool> TodoExist(Guid todoId)
    {
        return await _todoRepository.TodoExist(todoId);
    }

    public async Task<IEnumerable<Todo>> GetTodos()
    {
        var todos = await _todoRepository.GetTodos();
        return todos;
    }

    public async Task<Todo> GetTodoById(Guid todoId)
    {
        var todo = await _todoRepository.GetTodoById(todoId);
        return todo;
    }

    public async Task<Todo> CreateTodo(CreateTodoDto createTodoDto)
    {
        var createdTodo = await _todoRepository.CreateTodo(createTodoDto);
        return createdTodo;
    }

    public async Task<Todo> UpdateTodo(Guid todoId, CreateTodoDto updateTodoDto)
    {
        var updatedTodoDto = await _todoRepository.UpdateTodo(todoId, updateTodoDto);
        return updatedTodoDto;
    }

    public async Task DeleteTodo(Guid todoId)
    {
        await _todoRepository.DeleteTodo(todoId);
    }
}