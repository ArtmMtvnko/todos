import { Routes } from '@angular/router';
import { TodosTabComponent } from './components/todos-tab/todos-tab.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: TodosTabComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
];
