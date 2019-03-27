import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloworldmsgService } from '../service/data/helloworldmsg.service';
import { userRegistration } from 'src/app/classes/AllClasses';
import { UserServiceService } from 'src/app/service/data/user-service.service';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders({ 
//     'Access-Control-Allow-Origin':'*'
//     // 'Authorization':'authkey',
//     // 'userid':'1'
//   })
// };

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: any;
  responseMsg: String;

  buid:  string;
  empid: number;
  empname:  string;
  id: number;
  password:  string;
  projid: number;
  role:  string;
  useremailid: string;

  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private userRegistrationService: UserServiceService,
    private service: HelloworldmsgService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.username = this.route.snapshot.params['name']
    
  }

  handleRegistration(){
    console.log('Login processing......')
    console.log('BUID' + this.buid)
    console.log('EMPID' + this.empid)
    console.log('EMPNAME' + this.empname)
    console.log('PASSWORD' + this.password)
    console.log('PROJID' + this.projid)
    console.log('ROLE' + this.role)
    console.log('USEREMAILID' + this.useremailid)
    var newUser = new userRegistration;
    newUser.buid = this.buid;
    newUser.empid = this.empid;
    newUser.empname = this.empname;
    newUser.id = 25;
    newUser.password = this.password;
    newUser.projId = this.projid;
    newUser.role = this.role;
    newUser.userEmailId = this.useremailid;
    this.userRegistrationService.registerUser(newUser).subscribe(
      // response => this.handleSuccessfulRequest(response),
      response => {console.log('Response is ' + '' + response)}, 
      error => this.handleErrorResponse(error)     
    );

  }

  getmsg(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      // response => this.handleSuccessfulRequest(response),
      error => this.handleErrorResponse(error),
      response => console.log(response)
    );

    // console.log("Last line of register....");
    // console.log("Your Contents are being prepared .....");
  }

  // getmsgwithparam(){
  //   // console.log(this.service.executeHelloWorldBeanService());
  //   this.service.executeHelloWorldBeanServicePathVariable(this.username).subscribe(
  //     response => this.handleSuccessfulRequest(response),
  //     error => this.handleErrorResponse(error)
  //     // response => console.log(response)
  //   );  
  // }

  handleSuccessfulRequest(response){
    // console.log(response);
    // console.log(response.message);
    this.responseMsg = response.message;
  }

  handleErrorResponse(error){
    // console.log(response);
    // console.log(response.message);
    this.responseMsg = error.error.message;
  }


}
