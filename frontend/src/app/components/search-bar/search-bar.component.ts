import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'search-bar',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
    private todoService = inject(TodoService);
    private categoryService = inject(CategoryService)
    
    searchField = new FormControl('', [Validators.required]);

    search(): void {
        if (!this.searchField.valid) return;

        const query = this.searchField.value!;

        this.categoryService.activeCategory = undefined;
        this.todoService.displayTodosWithTitle(query);
    }
}
