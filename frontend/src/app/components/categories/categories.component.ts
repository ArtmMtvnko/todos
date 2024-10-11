import { Component, inject } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { AddingFormComponent } from '../shared/adding-form/adding-form.component';
import { CategoryService } from '../../services/category.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'categories',
    standalone: true,
    imports: [CategoryComponent, AddingFormComponent],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
    categoryService = inject(CategoryService);
    inputControl = new FormControl('');

    handleSubmit(): void {
        const categoryName = this.inputControl.value?.trim();

        if (!categoryName) {
            alert('Name of category cannot be empty!');
            return;
        }

        this.categoryService.createCategory({
            name: categoryName,
        });

        this.inputControl.reset();
    }
}
