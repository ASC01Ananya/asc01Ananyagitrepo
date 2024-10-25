import { Injectable } from '@angular/core';
import{User} from "../../app/model/user.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl:string='http://localhost:3000/users';

  constructor(private http:HttpClient) {
   }

    getUsers(){
      return this.http.get<User[]>(this.baseUrl)
    }

    createUser(user:User){
      return this.http.post(this.baseUrl,user);
    }
}
