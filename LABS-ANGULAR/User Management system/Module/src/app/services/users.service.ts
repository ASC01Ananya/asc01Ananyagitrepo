import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:3000/users';

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialUsers();
  }

  private loadInitialUsers(): void {
    this.http.get<User[]>(this.baseUrl).subscribe(users => {
      this.usersSubject.next(users);
    });
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      tap(newUser => {
        const currentUsers = this.usersSubject.value;
        this.usersSubject.next([...currentUsers, newUser]); // Add the new user to the list
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        const currentUsers = this.usersSubject.value.filter(user => user.id !== id);
        this.usersSubject.next(currentUsers); // Update the list without the deleted user
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user).pipe(
      tap(updatedUser => {
        const updatedUsers = this.usersSubject.value.map(u =>
          u.id === updatedUser.id ? updatedUser : u
        );
        this.usersSubject.next(updatedUsers); // Replace the old user with the updated one
      })
    );
  }
}
