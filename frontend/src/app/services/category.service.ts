import { inject, Injectable, OnInit } from '@angular/core';
import { Category } from '../types/category.type';
import { HttpService } from './http.service';
import { CategoryDto } from '../dto/category.dto';

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

    createCategory(body: CategoryDto): void {
        this.httpService
            .post<Category>(this.basePath, body)
            .subscribe((category) => {
                this.categoriesStore = [...this.categoriesStore, category];
                this.categories = [...this.categories, category];
            });
    }
}
