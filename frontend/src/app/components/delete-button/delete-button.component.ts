import { Component, Input } from '@angular/core';

@Component({
    selector: 'delete-button',
    standalone: true,
    templateUrl: './delete-button.component.html',
    styleUrl: './delete-button.component.scss',
})
export class DeleteButtonComponent {
    @Input() deleteHandler: () => void = () => {
        throw new Error('You have to pass a delete handler into a component');
    };;
}
