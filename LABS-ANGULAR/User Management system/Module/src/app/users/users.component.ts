import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-users',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list = localStorage.getItem("login");
  users: User[] = [];
  filteredUsers: User[] = [];
  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    // Fetch all users on component initialization
    this.userservice.getUsers().subscribe((userdata) => {
      this.users = userdata;
      this.filteredUsers = [...this.users];  // Display all records initially
    });
  }

  editUser(user: User): void {
    this.router.navigate(['/form', user.id]);  
  }

  // deleteUser(id: number): void {
  //   this.userservice.deleteUser(id).subscribe(() => {
  //     // Remove the user from the users array after successful deletion
  //     this.users = this.users.filter(user => user.id !== id);
  //     console.log(`User with ID ${id} deleted`);
  //   });
  // }

  deleteUser(id: number): void {
    this.userservice.deleteUser(id).subscribe(() => {
      // Update users array
      this.users = this.users.filter(user => user.id !== id);
      // Update filteredUsers array to reflect deletion immediately
      this.filteredUsers = this.filteredUsers.filter(user => user.id !== id);
      console.log(`User with ID ${id} deleted`);
    });
  }

  
  
  filterUsers(searchTerm: string): void {
    if (searchTerm.trim() === '') {
      this.filteredUsers = [...this.users];  // If search term is empty, reset to all users
    } else {
      // Filter users by first name or last name based on search term (case insensitive)
      this.filteredUsers = this.users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.lastname.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
}
}
