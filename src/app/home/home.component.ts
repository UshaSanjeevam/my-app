import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
// import{ loginAuthenticateService } from '../login/loginAuthenticateService';
import { Customer} from '../customers/Shared/customer.model';
//import{ AuthGuard } from '../auth/auth.guard';
import { ToastrService } from 'ngx-toastr';
import { WindowsAuthentication } from '../Shared/WindowsAuthentication';
import { windowsModel } from '../Shared/windowsModel';
import { authenticationWindows } from '../Shared/authenticationWindows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  parsedata:any;
  username:any;
constructor(private windowsService:WindowsAuthentication,  private router:Router,private windowsauthenticationservice:authenticationWindows){
  // if (localStorage.getItem('userToken') != (null || undefined))
  // {
  //   this.router.navigate(['/dashboard']);
  // }
  // else if(localStorage.getItem('userToken') ==(null || undefined))
  // {
  //   this.router.navigate(['home']);
  //  }

}
tokenParams:windowsModel;
customer:Customer[];
windowsModel:any;
ngOnInit() {
  //calling windows service
 this.windowsauthenticationservice.getAuthentication().subscribe(data => {
  this.tokenParams = data;
  localStorage.setItem("WindowsLoginUser",JSON.stringify(this.tokenParams));
},
err => {
  localStorage.setItem("WindowsLoginUser","ServiceIssue");
  this.router.navigate(['/login']);
  //throw err;
}
); 
//If wndows login service is successfull redirect to dashboard
  if(localStorage.getItem("WindowsLoginUser")!="ServiceIssue")
{
  if(localStorage.getItem("WindowsLoginUser")!=(null || undefined))
{
  this.parsedata=JSON.parse(localStorage.getItem("WindowsLoginUser"));
  this.username= this.parsedata.authenticated;
  var splitted = this.username.split ("\\");
  if(splitted[0]=="LOGISTICS")
  {
    this.router.navigate(['/dashboard']);
  }
}
}
//If wndows login service throughs error redirect to login
else if(localStorage.getItem("WindowsLoginUser")=="ServiceIssue")
{
  this.router.navigate(['/login']);
  localStorage.removeItem('WindowsLoginUser');   
}

}
  }

 
