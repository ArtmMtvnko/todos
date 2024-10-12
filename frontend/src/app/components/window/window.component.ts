import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
    selector: 'window',
    standalone: true,
    imports: [CategoriesComponent],
    templateUrl: './window.component.html',
    styleUrl: './window.component.scss',
})
export class WindowComponent {}
