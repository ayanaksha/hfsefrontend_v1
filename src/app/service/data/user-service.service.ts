import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, userRegistration, eventCreate } from 'src/app/classes/AllClasses';
import { Observable } from 'rxjs';
import { userID } from 'src/app/classes/userID';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  LoginEndPoint: string;
  allUrl = 'http://172.18.1.174:8084/allUI';
  volunteerUrl = 'http://172.18.1.174:8084/volunteerUI'

  constructor(private http:HttpClient) { }

  validateAndLogin(newUser:UserLogin): Observable<any>{
    const url = "http://localhost:5000" + "/api/v1/login";
    return this.http.post(url, newUser);
  }  

  // userCheck(newUser:userID): Observable<any>{
  //   const url = "https://jsonplaceholder.typicode.com/posts";
  //   return this.http.post(url, newUser);
  // } 
  // : userRegistration
  registerUser(newUser): Observable<any>{
    const url = this.allUrl + "/api/v1/online-sales-service/registerUser";
    return this.http.post(url,newUser, {responseType: 'text'})
  }

  // : eventRegistration
  registerEvent(newEvent): Observable<any>{
    const url = this.allUrl + "/api/v1/online-sales-service/createEvent";
    return this.http.post(url,newEvent, {responseType: 'text'})
  }

  // : getEventByPOC
  getEventByPOC(newUser): Observable<any>{
    const url = this.allUrl + "/api/v1/online-sales-service/eventcreatedByPOC";
    return this.http.post(url,newUser)
  }
  
  // : getAllEvents
  getAllEvents(newUser): Observable<any>{
    const url = this.allUrl + "/api/v1/online-sales-service/allEventSummary";
    return this.http.post(url,newUser)
  }

  // : volunteerEventRegiistration
  registerForAnEvent(newEventRegistration): Observable<any>{
    const url = this.allUrl + "/api/v1/online-sales-service/registerForAnEvent";
    return this.http.post(url,newEventRegistration)
  }

  // : getAllEvents
  getAllEventsByVolunteer(newUser): Observable<any>{
    const url = this.allUrl + "/api/v1/online-sales-service/eventRegistrationForUser";
    return this.http.post(url,newUser)
  }

  
}
