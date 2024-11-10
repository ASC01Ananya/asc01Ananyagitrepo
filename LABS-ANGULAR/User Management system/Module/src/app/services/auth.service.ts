
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;

  constructor() {
    const isLoggedIn = sessionStorage.getItem("login") === "true";
    this.isLoggedInSubject = new BehaviorSubject<boolean>(isLoggedIn);
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  login() {
    sessionStorage.setItem("login", "true");
    this.isLoggedInSubject.next(true);  
  }

  logout() {
    sessionStorage.removeItem("login");
    this.isLoggedInSubject.next(false);
  }

  getLoggedInStatus(): boolean {
    return this.isLoggedInSubject.value;
  }
}
