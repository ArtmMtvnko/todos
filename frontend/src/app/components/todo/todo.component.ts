import { Component, inject, Input } from '@angular/core';
import { Todo } from '../../types/todo.type';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
})
export class TodoComponent {
    @Input() todo!: Todo;

    private todoService = inject(TodoService);

    deleteTodo(): void {
        this.todoService.deleteTodoById(this.todo.id);
    }
}
