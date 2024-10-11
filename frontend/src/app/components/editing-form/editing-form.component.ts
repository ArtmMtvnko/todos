import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'editing-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './editing-form.component.html',
    styleUrl: './editing-form.component.scss',
})
export class EditingFormComponent implements AfterViewInit, OnInit {
    @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>
    
    @Input() initialValue: string = '';
    
    formControl!: FormControl;

    ngOnInit(): void {
        this.formControl = new FormControl(this.initialValue);
    }

    ngAfterViewInit(): void {
        this.inputElement.nativeElement.focus()
    }
}