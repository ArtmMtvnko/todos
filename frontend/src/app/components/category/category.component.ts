import { Component, inject, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditingFormComponent } from '../editing-form/editing-form.component';
import { PageService } from '../../services/page.service';

@Component({
    selector: 'category',
    standalone: true,
    imports: [DeleteButtonComponent, EditingFormComponent],
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
})
export class CategoryComponent {
    @Input() category!: Category;

    private todoService = inject(TodoService);
    private categoryService = inject(CategoryService);
    private pageService = inject(PageService);

    editing = false;

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
        this.pageService.resetPages();
    }

    deleteCategory(): void {
        this.categoryService.deleteCategoryById(this.category.id);
    }

    submitEditingHandler(editedName: string): void {
        this.categoryService.editCategory(this.category.id, {
            name: editedName,
        });

        this.editing = false;
    }
}
