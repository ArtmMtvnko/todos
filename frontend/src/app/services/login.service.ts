import { inject, Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private httpService = inject(HttpService);
    private basePath = '/authentication/login';

    private jwtToken: string | null = this.httpService.token;

    get token(): string | null {
        return this.jwtToken
    }
    
    set token(value: string) {
        this.jwtToken = value;
        this.httpService.token = value
    }
    

    login(body: LoginDto): void {
        this.httpService
            .post<{ token: string }>(this.basePath, body)
            .subscribe((response) => {
                this.token = response.token;
                localStorage.setItem('jwt_token_todo', response.token);
            });
    }
}
