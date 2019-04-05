import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from "../service/data/user-service.service";
import { HttpClient } from '@angular/common/http';
import { UserLogin, userRegistration } from '../classes/AllClasses';
import { eventDataService } from 'src/app/service/data/event-data.service';

@Injectable({
  providedIn: 'root'
})
export class HcauthService {
  
  jsonData: any;

  constructor(private userservice1: UserServiceService,
    private http:HttpClient,
    private router: Router,
    private dataPassage: eventDataService) { }
  
  user : userRegistration[];
  ;
  authenticate(empid,password){
    // console.log('before ' + this.isUserLoggedIn())
    var userlogin = new UserLogin;
    userlogin.empid = empid;
    userlogin.password = password;
    this.userservice1.validateAndLogin(userlogin).subscribe(
      // Response => {
      //   console.log(Response);
      //   return true;
      // });
      data => {
        console.log(data);
        this.user = data['loggedInUser'];
        this.jsonData = data;
        console.log('ROLE',this.jsonData['loggedInUser'].role);
        var userData = new userRegistration;
        userData = this.jsonData['loggedInUser'];
        this.dataPassage.storeUserData(userData);
        if (this.jsonData['loggedInUser'].role == 'POC'){
          this.router.navigate(['pocdash',this.jsonData['loggedInUser'].empid])
        }else if(this.jsonData['loggedInUser'].role == 'Volunteer'){
          this.router.navigate(['volunteerdash',this.jsonData['loggedInUser'].empid])
        }
        // if (this.user.role = 'POC'){
        //   console.log('Routing to volunteer');
        //   this.router.navigate(['volunteer','POC'])
        //   return true;
        // }
        // this.router.navigate(['volunteer']);
        
      },
      error => {
        return false;
      });
    return true;
    
    // Correct Hard Coded Implementation**************
    // if(username === 'ayanaksha' && password === 'password123'){
    //   sessionStorage.setItem('auth',username)
    //   // console.log('after ' + this.isUserLoggedIn())s
    //   return true
    // }
    // else{
    //   return false
    // }
  }

  // isUserLoggedIn(username){
  //   if(sessionStorage.getItem('auth') === username){
  //     return true
  //   }
  // }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('auth')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('auth');   
  }
}
