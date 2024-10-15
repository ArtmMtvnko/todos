import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { TodosComponent } from '../todos/todos.component';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
    selector: 'todo-tab',
    standalone: true,
    imports: [UserInfoComponent, CategoriesComponent, TodosComponent],
    templateUrl: './todos-tab.component.html',
    styleUrl: './todos-tab.component.scss',
})
export class TodosTabComponent {}
