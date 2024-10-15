import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { jwtDecode } from 'jwt-decode';

@Component({
    selector: 'user-info',
    standalone: true,
    imports: [],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
    private loginService = inject(LoginService)
    name = jwtDecode(this.loginService.token!).sub ?? 'Unkown'
}
