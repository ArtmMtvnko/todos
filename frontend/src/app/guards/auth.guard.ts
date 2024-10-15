import { inject, Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    GuardResult,
    MaybeAsync,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    private loginService = inject(LoginService);
    private router = inject(Router);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): MaybeAsync<GuardResult> {
        const jwtToken = this.loginService.token;

        if (!jwtToken) {
            this.router.navigate(['/login']);
            return false;
        }

        if (this.loginService.tokenExpired(jwtToken)) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
