import { inject, Injectable, OnInit } from '@angular/core';
import { Todo } from '../types/todo.type';
import { HttpService } from './http.service';
import { TodoDto } from '../dto/todo.dto';
import { Pagination } from '../components/enums/pagination.enum';

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

    getAmountOfTodosInCategory(id: string): number {
        return this.todoStore.reduce((acc, todo) => {
            return todo.categoryId === id ? acc + 1 : acc;
        }, 0);
    }

    displayTodosWithCategoryId(
        id: string,
        page: number = 1,
        todosPerPage: number = Pagination.TodosPerPage
    ): void {
        const skipNTodos = (page - 1) * todosPerPage;
        const showNTodos = todosPerPage + skipNTodos;

        const allCorrespondingTodos = this.todoStore.filter(
            (todo) => todo.categoryId === id
        );

        if (allCorrespondingTodos.length < skipNTodos) {
            throw new Error("Can't show more todos");
        }

        this.todos = allCorrespondingTodos.slice(skipNTodos, showNTodos);
    }

    displayTodosWithTitle(title: string) {
        const query = title.trim().toLowerCase();
        this.todos = this.todoStore.filter(
            (todo) => todo.title.toLowerCase().includes(query)
        );
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
