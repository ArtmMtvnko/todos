import { Component, inject, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Category } from '../../types/category.type';

@Component({
    selector: 'category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
})
export class CategoryComponent {
    @Input() category!: Category;

    private todoService = inject(TodoService)

    displayCorrespondingTodos() {
        this.todoService.displayTodosWithCategoryId(this.category.id);
    }
}
