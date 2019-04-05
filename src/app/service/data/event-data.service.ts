import { Injectable } from '@angular/core';
import { event } from 'src/app/volunteer/volunteer.component';
import { HttpClient } from '@angular/common/http';
import { userRegistration } from 'src/app/classes/AllClasses';

@Injectable({
  providedIn: 'root'
})
export class eventDataService {

  buid:  string;
  empid: number;
  empname:  string;
  id: number;
  password:  string;
  projId: number;
  role:  string;
  userEmailId: string;
  userData: userRegistration;

  constructor(
    private http:HttpClient
  ) { }
  
  
  retrieveAllEvents(username){
    return this.http.get<event[]>(`http://localhost:8080/users/${username}}/events`);
    // console.log("Execute Hello World Bean Service ....... ");
  }
  storeUserData($userData: userRegistration){
    // var userData = new userRegistration;
    this.userData = $userData;
    console.log('Data being passed....');
    console.log(this.userData.buid);
    console.log(this.userData.empid);
    console.log(this.userData.empname);
    console.log(this.userData.projId);
  }

  getUserData():any{
    console.log('Data being returned.....');
    console.log(this.userData.buid);
    console.log(this.userData.empid);
    console.log(this.userData.empname);
    console.log(this.userData.projId);
    return this.userData;
  }
  
}
