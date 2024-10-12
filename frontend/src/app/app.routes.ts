import { Routes } from '@angular/router';
import { TodosTabComponent } from './components/todos-tab/todos-tab.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: TodosTabComponent },
    { path: 'login', component: LoginComponent}
];
