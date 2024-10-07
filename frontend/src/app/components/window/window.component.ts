import { Component } from '@angular/core';
import { CategoriesComponent } from "../categories/categories.component";
import { TodosComponent } from "../todos/todos.component";

@Component({
    selector: 'window',
    standalone: true,
    imports: [CategoriesComponent, TodosComponent],
    templateUrl: './window.component.html',
    styleUrl: './window.component.scss',
})
export class WindowComponent {}
