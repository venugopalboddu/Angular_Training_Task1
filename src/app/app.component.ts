import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhpApi';
  message:any;
  upload(event) {
    const size = event.srcElement.files[0].size;
    if (size > 1000000) {
      this.message = "File must be less than 1MB";
    }
    else{
      this.message = "File Uploaded Successfully";
    }
  }
}
