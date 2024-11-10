
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../model/user.model';
import { UserService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  // standalone: true,
  // imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  operation: string = "Add";
  beverageOptions: string[] = ['Coffee', 'Tea', 'Juice', 'Water'];
  addForm: FormGroup;
  selectedUserId?: number;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.addForm = this.formBuilder.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required]],
      dob: ['', [Validators.required, this.pastDateValidator]],
      address: ['', Validators.required],
      beverage: ['', Validators.required],
      gender: ['', Validators.required],
      js_skill: ['', [Validators.min(0), Validators.max(100), this.rangeChecker]],
      payment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.selectedUserId = +userId;
        this.loadUserData(this.selectedUserId);
      }
    });
  }


  rangeChecker(control: AbstractControl): ValidationErrors | null {
    const inputRange = control.value;
    return (inputRange < 0 || inputRange > 100) ? { outOfRange: true } : null;
  }

  // Validator to ensure date of birth is in the past
  pastDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    return selectedDate >= today ? { pastDate: true } : null;
  }

  loadUserData(id: number): void {
    this.userService.getUserById(id).subscribe(user => {
      if (user) {
        this.operation = "Update";
        this.addForm.patchValue(user); // Populate form fields with user data
      } else {
        console.error(`User with ID ${id} not found.`);
      }
    });
  }

  saveUser(): void {
    if (this.addForm.valid) {
      const userData = this.addForm.value;

      if (this.selectedUserId) {
        // Update existing user
        this.userService.updateUser(userData).subscribe(updatedUser => {
          console.log('User updated:', updatedUser);
          this.addForm.reset(); // Reset form after saving
          this.router.navigate(['/employess']).then(() => {
            console.log('Navigated back to employees list');
          });
        });
      } else {
        // Create a new user
        this.userService.createUser(userData).subscribe(newUser => {
          console.log('New user created:', newUser);
          this.addForm.reset(); // Reset form after saving
          this.router.navigate(['/employess']).then(() => {
            console.log('Navigated back to employees list');
          });
        });
      }
    } else {
      console.error('Form is not valid');
    }
  }
}
