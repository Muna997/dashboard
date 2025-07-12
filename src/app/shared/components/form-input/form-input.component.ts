import { Component, input, signal, forwardRef } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ],
})
export class FormInputComponent implements ControlValueAccessor {
  label = input<string>('');
  type = input<'text' | 'email' | 'tel' | 'select'>('text');
  placeholder = input<string>('');
  options = input<{ label: string; value: string }[]>([]);

  value = signal<string>('');

  isDisabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    this.value.set(target.value);
    this.onChange(target.value);
    this.onTouched();
  }
}
