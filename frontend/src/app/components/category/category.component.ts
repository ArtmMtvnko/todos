import { Component, Input } from '@angular/core';

@Component({
    selector: 'category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss',
})
export class CategoryComponent {
    @Input() category: { name: string } = { name: 'default category' };
}
