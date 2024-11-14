import { ExpressionStatement } from '@angular/compiler';
import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loggedIn: boolean = false;
  // @Output() loggedInStatus = new EventEmitter<boolean>();
  constructor(private formBuilder: FormBuilder, private routes: Router, private authservice: AuthService) { }


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      // loginForm=new FormGroup({
      loginid: [""],
      password: [""]
    })

  }
  onSubmit() {
    console.log(this.loginForm.value);
    const loginid: string = this.loginForm.value.loginid;
    const password: string = this.loginForm.value.password;
    if (loginid == "anu" && password == "test") {
      console.log("login sucessfull");
      this.authservice.login();
      this.loggedIn = true;
      localStorage.setItem("login", "true");
      // this.loggedInStatus.emit(true);

      this.routes.navigate(['/issues']);
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.log("Invalid credentials");
      // localStorage.setItem("login","false");

    }
  }
}

