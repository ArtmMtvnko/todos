import { Component, inject } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { AddingFormComponent } from '../adding-form/adding-form.component';
import { TodoService } from '../../services/todo.service';
import { CategoryService } from '../../services/category.service';
import { PageNavComponent } from '../page-nav/page-nav.component';
import { PageService } from '../../services/page.service';

@Component({
    selector: 'todos',
    standalone: true,
    imports: [TodoComponent, AddingFormComponent, PageNavComponent],
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.scss',
})
export class TodosComponent {
    private pageService = inject(PageService);
    
    todoService = inject(TodoService);
    categoryService = inject(CategoryService);

    handleSubmit(todoTitle: string): void {
        if (this.pageService.pageFull()) {
            this.pageService.goToTheLastPage();
        }
        
        const selectedCategory = this.categoryService.activeCategory;

        if (!selectedCategory) {
            alert('Choose category where you want to add todo!');
            return;
        }

        this.todoService.createTodo({
            title: todoTitle,
            categoryId: selectedCategory.id,
        });
    }
}
