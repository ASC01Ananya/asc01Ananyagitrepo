import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServiceService } from './services/user-service.service';
import { User } from './model/user.model';
import { FormComponent } from './form/form.component';
// import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit{
  title = 'PracticeApp';
  // users: any;
  users?:User[];
constructor(private userservice:UserServiceService){

}
ngOnInit(): void {
  this.userservice.getUsers().subscribe(data => {
    this.users = data;
  });
}
}
