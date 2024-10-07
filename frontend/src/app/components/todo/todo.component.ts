import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
})
export class TodoComponent {
    @Input() todo: { title: string } = { title: 'Not displayed' };
}
