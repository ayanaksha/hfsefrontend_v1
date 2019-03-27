import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HcauthService } from '../service/hcauth.service';
import { UserLogin } from '../classes/AllClasses';
import { UserServiceService } from '../service/data/user-service.service';
import { userID } from '../classes/userID';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empid = 'empid'
  password = 'password'
  errmessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router: Router,
    private authentication: HcauthService,
    private userservice2: UserServiceService) { }
   
  ngOnInit() {
  }

  handleLogin(){
    console.log('Login processing......')
    console.log(this.empid)
    // console.log('Login processing......')
    // console.log(this.password)
    // if(this.username === 'ayanaksha' && this.password === 'password123'){
    //   this.invalidLogin = false
    //   this.errmessage = 'Login Successful'
    //   this.router.navigate(['register',this.username])
    // }
    // else{
    //   this.invalidLogin = true
    // }

    // RESTORE COMMENTS !!!!!
    console.log('USERNAME' + this.empid)
    console.log('PASSWORD' + this.password)
    console.log(this.authentication.authenticate(this.empid,this.password))
    
    if (this.authentication.authenticate(this.empid,this.password)){
      console.log('In Login Component Backend....');
      this.invalidLogin = false
      this.errmessage = 'Login Successful'
      // this.router.navigate(['logout',this.empid])
      // this.router.navigate(['logout'])
    }
    else{
      this.invalidLogin = true
    };

    // var userID1 = new userID;
    // userID1.id = 100;
    // userID1.userId = 1;
    // this.userservice2.userCheck(userID1).subscribe(
    //   data => {
    //     console.log(data)
    //   },
    //   error => {
    //     console.log('Error in Call')
    //   })
  };
}
