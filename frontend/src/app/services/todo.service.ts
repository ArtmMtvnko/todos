import { inject, Injectable, OnInit } from '@angular/core';
import { Todo } from '../types/todo.type';
import { HttpService } from './http.service';

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

    displayTodosWithCategoryId(id: string) {
        this.todos = this.todoStore.filter((todo) => todo.categoryId === id);
    }
}
