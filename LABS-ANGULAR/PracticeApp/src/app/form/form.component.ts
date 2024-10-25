import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup} from '@angular/forms'
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  addForm : FormGroup;
  constructor(private formBuilder:FormBuilder,private userservice:UserServiceService){
    this.addForm=this.formBuilder.group({
      id:[],
      name:[],
      lastname:[]
    });
  }
ngOnInit(): void {
  this.addForm=this.formBuilder.group({
    id:[],
    name:[],
    lastname:[]
  });
}

saveUser() {
    console.log('User details sent to server..');
     if (this.addForm) {
      console.log(this.addForm.value);
      this.userservice.createUser(this.addForm.value)
      .subscribe((data) => {
       console.log('data saved ', data)
      })
    } else {
      console.error('Form is not initialized');
    }
   
   }
}
