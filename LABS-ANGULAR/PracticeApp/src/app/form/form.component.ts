import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { CommonModule } from '@angular/common';
import { User } from '../model/user.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit, OnChanges {
  @Input() selectedUser?: User; // User to be updated, if provided
  @Output() userSaved = new EventEmitter<void>(); // Emit an event when the user is saved
  beverageOptions: string[] = ['Coffee', 'Tea', 'Juice', 'Water'];
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) {
    this.addForm = this.formBuilder.group({
      id: [null, Validators.required],
      name: [],
      lastname: [],
      dob: [],
      address: [],
      beverage:[],
      gender: [],
      js_skill: [],
      payment: []
    });
  }

  ngOnInit(): void {
    console.log('Selected User:', this.selectedUser); 
    if (this.selectedUser) {
      this.populateForm();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser'] && this.selectedUser) {
      this.populateForm();
    }
  }

  private populateForm(): void {
    if (this.selectedUser) {
      this.addForm.patchValue({
        id: this.selectedUser.id,
        name: this.selectedUser.name,
        lastname: this.selectedUser.lastname
      });
    }
  }

  saveUser(): void {
    console.log('User details sent to server..');
    if (this.addForm.valid) {
      const userData = this.addForm.value;
      if (this.selectedUser) {
        this.userService.updateUser(userData).subscribe((data) => {
          console.log('User updated:', data);
          this.userSaved.emit();
          this.addForm.reset(); // Reset form after saving
        });
      } else {
        this.userService.createUser(userData).subscribe((data) => {
          console.log('New user created:', data);
          this.userSaved.emit();
          this.addForm.reset(); 
        });
      }
    } else {
      console.error('Form is not valid');
    }
  }
}
