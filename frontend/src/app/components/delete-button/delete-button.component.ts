import { Component, Input } from '@angular/core';

@Component({
    selector: 'delete-button',
    standalone: true,
    templateUrl: './delete-button.component.html',
    styleUrl: './delete-button.component.scss',
})
export class DeleteButtonComponent {
    @Input() deleteHandler!: () => void;
}
