import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../types/category.type';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private http = inject(HttpClient);
    private baseUrl = 'http://localhost:5143/api/category';

    categories: Category[] = [];

    fetchCategories(): void {
        this.http.get<Category[]>(this.baseUrl).subscribe((categories) => {
            this.categories = categories;
        });
    }
}
