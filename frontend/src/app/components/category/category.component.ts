import { Component, inject, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
})
export class CategoryComponent {
    @Input() category!: Category;

    private todoService = inject(TodoService);
    private categoryService = inject(CategoryService);

    getActiveClassName(): 'active' | '' {
        if (!this.categoryService.activeCategory) return '';

        return this.categoryService.activeCategory.id === this.category.id
            ? 'active'
            : '';
    }

    setActive(): void {
        this.categoryService.activeCategory = this.category;
    }

    displayCorrespondingTodos(): void {
        this.todoService.displayTodosWithCategoryId(this.category.id);
    }

    deleteCategory(): void {
        this.categoryService.deleteCategoryById(this.category.id);
    }
}
