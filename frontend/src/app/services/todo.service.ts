import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../types/todo.type';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost:5143/api/todo';

    todos: Todo[] = [];

    fetchTodos(): void {
        this.http.get<Todo[]>(this.baseUrl).subscribe((todos) => {
            this.todos = todos;
        });
    }
}
