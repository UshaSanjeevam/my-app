import { Component, OnInit } from '@angular/core';
import { userDetails } from '../classes/userDetails';
import { userDetailsService } from '../Shared/userDetailsService';
import { HttpResponse, HttpRequest,HttpClient,HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  parsedata:any;
  username:any;
title:string;
userdetailsModel:userDetails[]; 

  constructor(private authenticateservice:userDetailsService,private toastr:ToastrService) {}

  ngOnInit() {
    //Windows User
    if(localStorage.getItem("WindowsLoginUser") !=undefined
  && 
  localStorage.getItem("WindowsLoginUser") !=null
  && localStorage.getItem("WindowsLoginUser") !="ServiceIssue")
  {
    //JSON.parse
    this.parsedata=JSON.parse(localStorage.getItem("WindowsLoginUser"));
    this.username=this.parsedata.authenticated;
  }
//Forms login
  else if(localStorage.getItem("FormsLoginUserName")!=(null || undefined))
  {
    this.authenticateservice.getUserDetails(localStorage.getItem("USERID"))
    .then((data:any[])=>{
      this.userdetailsModel=data;
    });
    this.parsedata=localStorage.getItem("FormsLoginUserName");
    this.username=this.parsedata;
  }
  }
}
