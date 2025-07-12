import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FormInputComponent } from '../../../shared/components/form-input/form-input.component';

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule, FormInputComponent],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss',
})
export class AddMemberComponent implements OnInit {
  addMemberForm!: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.addMemberForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', Validators.required],
  //     position: ['', Validators.required],
  //     gender: ['', Validators.required],
  //   });
  // }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.addMemberForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      position: [''],
      gender: [''],
    });
  }

  onSubmit() {
    if (this.addMemberForm.valid) {
      console.log('Form Data:', this.addMemberForm.value);
      // TODO: send to API or emit event
    } else {
      this.addMemberForm.markAllAsTouched();
    }
  }
}
