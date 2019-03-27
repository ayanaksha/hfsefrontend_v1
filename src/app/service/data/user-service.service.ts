import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, userRegistration } from 'src/app/classes/AllClasses';
import { Observable } from 'rxjs';
import { userID } from 'src/app/classes/userID';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  LoginEndPoint: string;

  constructor(private http:HttpClient) { }

  validateAndLogin(newUser:UserLogin): Observable<any>{
    const url = "http://localhost:5000" + "/api/v1/login";
    return this.http.post(url, newUser);
  }  

  userCheck(newUser:userID): Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.post(url, newUser);
  } 
  // : userRegistration
  registerUser(newUser): Observable<any>{
    const url = "http://localhost:5000" + "/api/v1/online-sales-service/registerUser";
    return this.http.post(url,newUser, {responseType: 'text'})
  }

}
