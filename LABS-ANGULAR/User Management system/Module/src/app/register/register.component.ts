import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgClass,NgIf,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
register!:FormGroup;

constructor(private formBuilder:FormBuilder,private router:Router){}

ngOnInit(): void {
    this.register=this.formBuilder.group({
      name:['',Validators.required],
    });
}
onSubmit() {
throw new Error('Method not implemented.');
}

}
