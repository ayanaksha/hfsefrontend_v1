import { Component, OnInit } from '@angular/core';
// import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material';
import { UserServiceService } from 'src/app/service/data/user-service.service';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';
import { eventDataService } from 'src/app/service/data/event-data.service';
import { userRegistration, eventCreate } from 'src/app/classes/AllClasses';

@Component({
  selector: 'app-poc-dash',
  templateUrl: './poc-dash.component.html',
  styleUrls: ['./poc-dash.component.css']
})
export class PocDashComponent implements OnInit {
  empid: any;
  fileToUpload: File = null;
  userData: userRegistration;
  responseMsg: any;
  // events: eventCreate[];
  // events: Array<eventCreate> = [];
  events:eventCreate;
  teststring: string; /* test */

  constructor(private fileUploadService: UserServiceService,
              private getUserDataService: eventDataService,
              private userAPIService: UserServiceService) { }

  ngOnInit() {
    console.log('Getting User Details');
    this.userData = this.getUserDataService.getUserData();
    console.log(this.userData.buid);
    console.log(this.userData.empid);
    console.log(this.userData.empname);
    console.log(this.userData.projId);
    console.log(this.userData.role);
    console.log(this.userData.userEmailId);
    this.getAllEventsByPOC();
  }
  
  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });

  getAllEventsByPOC(){
    console.log('Getting all Events By POC......')
    // console.log('BUID' + this.userData.buid)
    // console.log('EMPID' + this.userData.empid)
    // console.log('EMPNAME' + this.userData.empname)
    // console.log('PASSWORD' + this.userData.password)
    // console.log('PROJID' + this.userData.projId)
    // console.log('ROLE' + this.userData.role)
    // console.log('USEREMAILID' + this.userData.userEmailId)
    console.log('Data to be passed as input....' + this.userData)
    var newUser = new userRegistration;
    // newUser.buid = this.userData.buid;
    // newUser.empid = this.userData.empid;
    // newUser.empname = this.userData.empname;
    // newUser.id = 25;
    // newUser.password = this.userData.password;
    // newUser.projId = this.userData.projId;
    // newUser.role = this.userData.role;
    // newUser.userEmailId = this.userData.userEmailId;
    newUser = this.userData;
    this.userAPIService.getEventByPOC(newUser).subscribe(
      // response => this.handleSuccessfulRequest(response),
      response => {
        console.log('Response is ' + '' + response);
        // this.events = response.jsonData;
        this.events = response
        console.log('Events'+this.events);
      }, 
      // data => {
      //   console.log('Response is ' + '' + data)
      //   this.events = data;
      // },
      error => this.handleErrorResponse(error)     
    )};

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
