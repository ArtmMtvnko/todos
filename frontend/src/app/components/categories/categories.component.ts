import { Component, inject } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { AddingFormComponent } from '../adding-form/adding-form.component';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'categories',
    standalone: true,
    imports: [CategoryComponent, AddingFormComponent],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
    categoryService = inject(CategoryService);

    handleSubmit(categoryName: string): void {
        this.categoryService.createCategory({
            name: categoryName,
        });
    }
}
