import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CategoryService } from '../../services/category.service';
import { PageService } from '../../services/page.service';

@Component({
    selector: 'page-nav',
    standalone: true,
    templateUrl: './page-nav.component.html',
    styleUrl: './page-nav.component.scss',
})
export class PageNavComponent {
    pageService = inject(PageService)
}
