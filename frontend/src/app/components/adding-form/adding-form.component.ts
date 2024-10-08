import { Component, Input } from '@angular/core';

@Component({
    selector: 'adding-form',
    standalone: true,
    templateUrl: './adding-form.component.html',
    styleUrl: './adding-form.component.scss',
})
export class AddingFormComponent {
    @Input() placeholder: string = '';
}
