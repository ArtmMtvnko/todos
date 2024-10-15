import { inject, Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { TodoService } from './todo.service';

@Injectable({
    providedIn: 'root',
})
export class PageService {
    private todoService = inject(TodoService);
    private categoryService = inject(CategoryService);

    page = 1;

    onRight(): void {
        if (!this.rightActive()) return;
        
        const selectedCategory = this.categoryService.activeCategory;

        this.page++;

        this.todoService.displayTodosWithCategoryId(
            selectedCategory!.id,
            this.page
        );
    }

    onLeft(): void {
        if (!this.leftActive()) return;

        const selectedCategory = this.categoryService.activeCategory;

        this.page--;

        this.todoService.displayTodosWithCategoryId(
            selectedCategory!.id,
            this.page
        );
    }

    leftActive(): boolean {
        return this.page > 1;
    }

    rightActive(): boolean {
        const selectedCategory = this.categoryService.activeCategory;

        if (!selectedCategory) {
            return false;
        }

        const amountOfTodos = this.todoService.getAmountOfTodosInCategory(
            selectedCategory.id
        );
        const todosPerPage = 10;

        return amountOfTodos > this.page * todosPerPage;
    }

    resetPages(): void {
        this.page = 1;
    }
}
