import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost:5143/api';
    private jwtToken: string | null = localStorage.getItem('jwt_token_todo');
    private bearerToken = 'Bearer ' + this.jwtToken;

    get token(): string | null {
        return this.jwtToken;
    }

    set token(value: string) {
        this.jwtToken = value;
        this.bearerToken = 'Bearer ' + value;
    }

    private concatenateUrl(baseUrl: string, path: string): string {
        if (path.includes(' ')) throw new Error('Path must not contain spaces');

        if (path.startsWith('/')) {
            return baseUrl + path;
        } else {
            return baseUrl + '/' + path;
        }
    }

    get<T>(path: string): Observable<T> {
        return this.http.get<T>(this.concatenateUrl(this.baseUrl, path), {
            headers: { Authorization: this.bearerToken },
        });
    }

    post<T>(path: string, body: unknown): Observable<T> {
        return this.http.post<T>(
            this.concatenateUrl(this.baseUrl, path),
            body,
            {
                headers: { Authorization: this.bearerToken },
            }
        );
    }

    put<T>(path: string, body: unknown): Observable<T> {
        return this.http.put<T>(this.concatenateUrl(this.baseUrl, path), body, {
            headers: { Authorization: this.bearerToken },
        });
    }

    delete(path: string): Observable<void> {
        return this.http.delete<void>(this.concatenateUrl(this.baseUrl, path), {
            headers: { Authorization: this.bearerToken },
        });
    }
}
