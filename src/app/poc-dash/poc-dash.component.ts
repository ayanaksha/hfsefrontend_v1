import { Component, OnInit } from '@angular/core';
// import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material';
import { UserServiceService } from 'src/app/service/data/user-service.service';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-poc-dash',
  templateUrl: './poc-dash.component.html',
  styleUrls: ['./poc-dash.component.css']
})
export class PocDashComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private fileUploadService: UserServiceService) { }

  ngOnInit() {
  }
  
  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });
  
}
