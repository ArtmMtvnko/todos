import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
    selector: 'user-info',
    standalone: true,
    imports: [],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
    private loginService = inject(LoginService);
    private router = inject(Router);

    name = this.loginService.token
        ? jwtDecode(this.loginService.token).sub ?? 'Unknown'
        : 'Unknown';

    logout() {
        this.loginService.resetToken();
        this.router.navigate(['/login']);
    }
}
