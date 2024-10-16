import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { TodosComponent } from '../todos/todos.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
    selector: 'todo-tab',
    standalone: true,
    imports: [UserInfoComponent, SearchBarComponent, CategoriesComponent, TodosComponent],
    templateUrl: './todos-tab.component.html',
    styleUrl: './todos-tab.component.scss',
})
export class TodosTabComponent {}
