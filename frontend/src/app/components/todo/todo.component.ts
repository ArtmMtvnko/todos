import { Component, inject, Input } from '@angular/core';
import { Todo } from '../../types/todo.type';
import { TodoService } from '../../services/todo.service';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditingFormComponent } from '../editing-form/editing-form.component';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'todo',
    standalone: true,
    imports: [DeleteButtonComponent, EditingFormComponent],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
})
export class TodoComponent {
    @Input() todo!: Todo;

    private todoService = inject(TodoService);
    private categoryService = inject(CategoryService);

    editing = false;

    deleteTodo(): void {
        this.todoService.deleteTodoById(this.todo.id);
    }

    submitEditingHandler(editedTitle: string): void {
        const selectedCategory = this.categoryService.activeCategory;

        if (!selectedCategory) {
            alert('Choose category before editing todo.');
            return;
        }

        this.todoService.editTodo(this.todo.id, {
            title: editedTitle,
            categoryId: selectedCategory.id,
        });

        this.editing = false;
    }
}
