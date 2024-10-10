import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'adding-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './adding-form.component.html',
    styleUrl: './adding-form.component.scss',
})
export class AddingFormComponent {
    @Input() placeholder: string = '';
    @Input() formControl: FormControl = new FormControl('');
    @Input() submitHandler: () => void = () => {
        throw new Error('You have to pass a submit handler into component');
    };
}
