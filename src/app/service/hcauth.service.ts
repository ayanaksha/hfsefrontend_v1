import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from "../service/data/user-service.service";
import { HttpClient } from '@angular/common/http';
import { UserLogin, userRegistration } from '../classes/AllClasses';

@Injectable({
  providedIn: 'root'
})
export class HcauthService {
  
  constructor(private userservice1: UserServiceService,
    private http:HttpClient,
    private router: Router) { }
  
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
        this.user = data.loggedInUser;
        console.log(this.user.role);
        if (this.user.role = 'POC'){
          console.log('Routing to volunteer');
          this.router.navigate(['volunteer','POC'])
          return true;
        }
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
