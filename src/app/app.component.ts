import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF';
  topicHasError: boolean = true;
  submitted = false;
  errMsg = '';
  topics = ['Angular', 'React', 'Vue'];

  userModel = new User('ali', 'ali@gmail.com' ,962785189906, 'default', '', false);
constructor(private empService: EnrollmentService){

}
  topicValidate(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit(userModel) {
    console.log(userModel);

    // this.empService.enroll(this.userModel)
    // .subscribe(
    //   data=>{
    //       console.log('Success',data);
    //   },
    //   error => this.errMsg = error.statusText
    // )
    // this.submitted = true;
  }
}
