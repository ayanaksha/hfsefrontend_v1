import { Injectable } from '@angular/core';
import { event } from 'src/app/volunteer/volunteer.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class eventDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllEvents(username){
    return this.http.get<event[]>(`http://localhost:8080/users/${username}}/events`);
    // console.log("Execute Hello World Bean Service ....... ");
  }
}
