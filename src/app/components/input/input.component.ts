import { CommonModule } from '@angular/common';
import { Component, Self } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NgControl,
    ReactiveFormsModule,
} from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
    public value: string = '';

    public onChange: any = () => {};

    public onTouched: any = () => {};

    constructor(@Self() public superControl: NgControl) {
        this.superControl.valueAccessor = this;
    }

    public writeValue(value: any): void {
        this.value = value;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public updateValue(newValue: any): void {
        this.value = newValue.value;
        this.onChange(newValue.value);
    }
}
