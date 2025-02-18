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

    categories: Category[] = [];
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
                this.categories = [...this.categories, category];
            });
    }

    editCategory(id: string, body: CategoryDto): void {
        this.httpService
            .put<Category>(`${this.basePath}/${id}`, body)
            .subscribe((editedCaregory) => [
                (this.categories = this.categories.map((category) =>
                    category.id === editedCaregory.id
                        ? editedCaregory
                        : category
                )),
            ]);
    }

    deleteCategoryById(id: string): void {
        this.httpService.delete(`${this.basePath}/${id}`).subscribe(() => {
            this.categories = this.categories.filter(
                (category) => category.id !== id
            );
        });
    }
}
