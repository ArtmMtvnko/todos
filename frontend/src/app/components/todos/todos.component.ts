import { Component, inject, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { AddingFormComponent } from "../adding-form/adding-form.component";
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'todos',
    standalone: true,
    imports: [TodoComponent, AddingFormComponent],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
    todoService = inject(TodoService);

    ngOnInit(): void {
        this.todoService.fetchTodos();
    }
}
