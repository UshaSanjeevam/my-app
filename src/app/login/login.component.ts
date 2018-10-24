import { Component, OnInit } from '@angular/core';
import { loginAuthenticateService } from './loginAuthenticateService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../Shared/userModel';
import { TokenParamas } from '../classes/tokenparamas';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers :[loginAuthenticateService]
})
export class LoginComponent  implements OnInit{
  isLoginError : boolean = false;
  readonly rootUrl = 'http://localhost:42515/';
  some:any[];
  username:string;
     Password:string;
   

   constructor(private router:Router,
     private authenticateservice:loginAuthenticateService,private toastr: ToastrService) { 
       //If it's  a autherzied user
      if (localStorage.getItem('userToken') != null) 
      {
        this.router.navigate(['/dashboard']);
      }
      //If it's not a autherzied user
      else if(localStorage.getItem('userToken') == null)
      {
        this.router.navigate(['login']);
      }
      //If windows service fails
      else if(localStorage.getItem("Authenticated")=="ServiceIssue")
      {
        this.router.navigate(['login']);
      }
      this.router.navigate(['login']);
  }
  
  tokenParams:TokenParamas;
  DoLogin()
  {
    this.authenticateservice.login(this.username,this.Password)
    .subscribe(
      data=>{
        this.tokenParams=data;
        this.authenticateservice.AccessToken=this.tokenParams.access_token;
        localStorage.setItem('userToken', this.authenticateservice.AccessToken);
        if(localStorage.getItem('userToken') !=(null|| undefined))
        {
          localStorage.setItem('FormsLoginUserName', this.tokenParams.userName);
          if(this.tokenParams.role=="user")
          {
          this.router.navigate(['/dashboard']);
          }
          else if(this.tokenParams.role=="admin")
          {
            this.router.navigate(['/admin']);
          }
        }
     },err=>
     
     {
      this.toastr.error('Please enter valid credentails', 'Employee Login');
    }
   
   
   );
  //  err => {
  //   throw err;
  // }
  }
  ngOnInit(){
    // if(localStorage.getItem("pass")==(undefined || "undefined"))
    // {
    //   localStorage.setItem("pass","satisfiedWindows");
    // }
    // else  if(localStorage.getItem("pass")!=(undefined || "undefined"))
    // {
    //   return;
    // }
  }

}
