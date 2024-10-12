import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { TodosComponent } from '../todos/todos.component';

@Component({
    selector: 'todo-tab',
    standalone: true,
    imports: [CategoriesComponent, TodosComponent],
    templateUrl: './todos-tab.component.html',
    styleUrl: './todos-tab.component.scss',
})
export class TodosTabComponent {}
