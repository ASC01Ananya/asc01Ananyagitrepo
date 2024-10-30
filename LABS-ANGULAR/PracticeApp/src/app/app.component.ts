import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserServiceService } from './services/user-service.service';
import { User } from './model/user.model';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  selectedUser?: User;
  isHomeRoute: boolean = true;

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {

    this.loadUsers();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeRoute = event.url === '/';
      }
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onUserSaved(): void {
    this.loadUsers();
    this.selectedUser = undefined;
  }

  editUser(user: User): void {
    this.selectedUser = user;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}