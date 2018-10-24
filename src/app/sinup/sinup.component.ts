import { Component, OnInit } from '@angular/core';
import { loginAuthenticateService } from '../login/loginAuthenticateService';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { User} from '../Shared/userModel';
@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: loginAuthenticateService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserID: '',
      Password: '',
      Email: '',
      Name: ''
      
    }
  }

  // OnSubmit(form: NgForm) {
  //   this.userService.registerUser(form.value)
  //     .subscribe((data: any) => {
  //       if (data.Succeeded == true) {
  //         this.resetForm(form);
  //         this.toastr.success('User registration successful');
  //       }
  //       else
  //         this.toastr.error(data.Errors[0]);
  //     });
  // }

}
