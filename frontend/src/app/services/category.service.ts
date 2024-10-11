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

    private readonly ALL_CATEGORY = { id: 'all', name: 'all', createdAt: '1970-01-01 15:15:50.51227+03' } as const;
    
    categories: Category[] = [this.ALL_CATEGORY]
    activeCategory?: Category;

    constructor() {
        this.fetchCategories();
    }

    fetchCategories(): void {
        this.httpService
            .get<Category[]>(this.basePath)
            .subscribe((categories) => {
                this.categories = categories;
            });
    }

    createCategory(body: CategoryDto): void {
        this.httpService
            .post<Category>(this.basePath, body)
            .subscribe((category) => {
                this.categories.push(category);
            });
    }

    deleteCategoryById(id: string): void {
        this.httpService.delete(`${this.basePath}/${id}`).subscribe(() => {
            this.categories = this.categories.filter(
                (category) => category.id !== id
            );
        });
    }
}
