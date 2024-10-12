import { Component, inject, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { TodosComponent } from '../todos/todos.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'todo-tab',
    standalone: true,
    imports: [CategoriesComponent, TodosComponent],
    templateUrl: './todos-tab.component.html',
    styleUrl: './todos-tab.component.scss',
})
export class TodosTabComponent implements OnInit {
    private loginService = inject(LoginService)
    private router = inject(Router)

    ngOnInit(): void {
        if (!this.loginService.token) {
            this.router.navigate(['/login'])
        }
    }
}
