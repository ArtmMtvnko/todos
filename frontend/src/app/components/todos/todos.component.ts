import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
    selector: 'todos',
    standalone: true,
    imports: [TodoComponent],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
})
export class TodosComponent {
    todos = [
        { id: 1, title: 'todo 11' },
        { id: 2, title: 'todo 12' },
        { id: 3, title: 'todo 13' },
        { id: 4, title: 'todo 14' },
        { id: 5, title: 'todo 15' },
        { id: 6, title: 'todo 16' },
        { id: 7, title: 'todo 17' },
        { id: 8, title: 'todo 18' },
        { id: 9, title: 'todo 19' },
        { id: 10, title: 'todo 20' },
    ];
}
