import { inject, Injectable, OnInit } from '@angular/core';
import { Category } from '../types/category.type';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private httpService = inject(HttpService);
    private basePath = '/category';
    private categoriesStore: Category[] = [];

    categories: Category[] = [];

    constructor() {
        this.fetchCategories();
    }

    fetchCategories(): void {
        this.httpService
            .get<Category[]>(this.basePath)
            .subscribe((categories) => {
                this.categoriesStore = categories;
                this.categories = categories;
            });
    }
}
