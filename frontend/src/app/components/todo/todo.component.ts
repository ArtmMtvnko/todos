import { Component, Input } from '@angular/core';
import { Todo } from '../../types/todo.type';

@Component({
    selector: 'todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
})
export class TodoComponent {
    @Input() todo!: Todo;
}
