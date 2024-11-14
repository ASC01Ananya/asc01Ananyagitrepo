import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Module';
  loggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // this.loggedIn = sessionStorage.getItem("login") === "true";
    this.authService.isLoggedIn$.subscribe((status: boolean) => {
      this.loggedIn = status;
    });
  }
  onLogout(): void {
    sessionStorage.removeItem("login");
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}
