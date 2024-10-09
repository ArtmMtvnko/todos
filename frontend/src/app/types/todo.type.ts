import { Category } from './category.type';

export interface Todo {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    categoryId: string;
    category: Category;
}
