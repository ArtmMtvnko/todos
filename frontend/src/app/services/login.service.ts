import { inject, Injectable } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { HttpService } from './http.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private httpService = inject(HttpService);
    private basePath = '/authentication/login';

    private jwtToken: string | null = this.httpService.token;

    get token(): string | null {
        return this.jwtToken;
    }

    set token(value: string) {
        this.jwtToken = value;
        this.httpService.token = value;
    }

    login(
        body: LoginDto,
        onFullFill?: () => void,
        onError?: (error?: Error) => void
    ): void {
        this.httpService
            .post<{ token: string }>(this.basePath, body)
            .subscribe({
                next: (response) => {
                    this.token = response.token;
                    localStorage.setItem('jwt_token_todo', response.token);

                    if (onFullFill) onFullFill();
                },
                error: (error) => {
                    if (onError) onError(error);
                },
            });
    }

    tokenExpired(token: string): boolean {
        try {
            const decodedToken = jwtDecode(token);

            if (!decodedToken.exp) return false;

            const expirationDate = decodedToken.exp * 1000;

            return Date.now() > expirationDate;
        } catch {
            return true;
        }
    }
}
