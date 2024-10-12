import { Component, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private loginService = inject(LoginService);
    private route = inject(Router);

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    onSubmit(): void {
        if (!this.loginForm.valid) {
            alert('Fileds cannot be empty');
            return;
        }

        this.loginService.login({
            username: this.loginForm.value.username!,
            password: this.loginForm.value.password!,
        });

        this.loginForm.reset();
        this.route.navigate(['']);
    }
}
