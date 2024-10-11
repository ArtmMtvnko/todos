import { inject, Injectable, OnInit } from '@angular/core';
import { Todo } from '../types/todo.type';
import { HttpService } from './http.service';
import { TodoDto } from '../dto/todo.dto';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private httpService = inject(HttpService);
    private basePath = '/todo';
    private todoStore: Todo[] = [];

    todos: Todo[] = [];

    constructor() {
        this.fetchTodos();
    }

    fetchTodos(): void {
        this.httpService.get<Todo[]>(this.basePath).subscribe((todos) => {
            this.todoStore = todos;
        });
    }

    displayTodosWithCategoryId(id: string): void {
        this.todos = this.todoStore.filter((todo) => todo.categoryId === id);
    }

    createTodo(body: TodoDto) {
        this.httpService.post<Todo>(this.basePath, body).subscribe((todo) => {
            this.todoStore = [...this.todoStore, todo];
            this.todos = [...this.todos, todo];
        });
    }

    editTodo(id: string, body: TodoDto) {
        this.httpService
            .put<Todo>(`${this.basePath}/${id}`, body)
            .subscribe((editedTodo) => {
                this.todoStore = this.todoStore.map((todo) =>
                    todo.id === editedTodo.id ? editedTodo : todo
                );
                this.todos = this.todos.map((todo) =>
                    todo.id === editedTodo.id ? editedTodo : todo
                );
            });
    }

    deleteTodoById(id: string): void {
        this.httpService.delete(`${this.basePath}/${id}`).subscribe(() => {
            this.todoStore = this.todoStore.filter((todo) => todo.id !== id);
            this.todos = this.todos.filter((todo) => todo.id !== id);
        });
    }
}
