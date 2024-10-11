import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'editing-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './editing-form.component.html',
    styleUrl: './editing-form.component.scss',
})
export class EditingFormComponent implements AfterViewInit, OnInit {
    @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

    @Input() initialValue: string = '';
    @Input() submitHandler: (fieldValue: string) => void = () => {
        throw new Error('You have to pass a submit handler into component');
    };

    private eventHandled!: boolean;
    
    formControl!: FormControl;

    ngOnInit(): void {
        this.formControl = new FormControl(this.initialValue);
    }

    ngAfterViewInit(): void {
        this.inputElement.nativeElement.focus();
        this.eventHandled = false;
    }

    submit(): void {
        if (this.eventHandled) return;
        
        const fieldValue = this.formControl.value?.trim();

        if (!fieldValue) {
            alert('Filed cannot be empty!');
            return;
        }

        if (this.initialValue === fieldValue) {
            return;
        }

        this.submitHandler(fieldValue);

        this.formControl.reset();
        this.eventHandled = true;
    }
}
