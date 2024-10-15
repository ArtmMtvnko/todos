import { Component, inject, OnInit } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { TodosComponent } from '../todos/todos.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
    selector: 'todo-tab',
    standalone: true,
    imports: [UserInfoComponent, CategoriesComponent, TodosComponent],
    templateUrl: './todos-tab.component.html',
    styleUrl: './todos-tab.component.scss',
})
export class TodosTabComponent implements OnInit {
    private loginService = inject(LoginService);
    private router = inject(Router);

    ngOnInit(): void {
        const jwtToken = this.loginService.token;

        if (!jwtToken) {
            this.router.navigate(['/login']);
            return;
        }

        if (this.loginService.tokenExpired(jwtToken)) {
            this.router.navigate(['/login']);
        }
    }
}
