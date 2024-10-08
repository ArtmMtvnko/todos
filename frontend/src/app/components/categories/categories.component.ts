import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { AddingFormComponent } from '../adding-form/adding-form.component';

@Component({
    selector: 'categories',
    standalone: true,
    imports: [CategoryComponent, AddingFormComponent],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
    categories = [
        { id: 101, name: 'Category 1' },
        { id: 102, name: 'Category 2' },
        { id: 103, name: 'Category 3' },
        { id: 104, name: 'Category 4' },
        { id: 105, name: 'Category 5' },
    ];
}
