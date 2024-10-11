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
    @Input() submitHandler: (fieldValue: string) => void = () => {
        throw new Error('You have to pass a submit handler into component');
    };

    formControl: FormControl = new FormControl('');

    submit() {
        const fieldValue = this.formControl.value?.trim();

        if (!fieldValue) {
            alert('Filed cannot be empty!')
            return
        }

        this.submitHandler(fieldValue)

        this.formControl.reset()
    }
}
