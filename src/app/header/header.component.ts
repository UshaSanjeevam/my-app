import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  parsedata:any;
  username:any;
  gender:any;
  public isCollapsed = true;
  constructor(private router:Router) { }

  ngOnInit() {
    //Windows login
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
    this.parsedata=localStorage.getItem("FormsLoginUserName");
    this.username=this.parsedata;
    if(localStorage.getItem('UserGender')=="Male") 
    {
     this.gender="Male";
    }
    else
    {
       this.gender="Female";
    };

  }
  
  }
  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('WindowsLoginUser');   
    localStorage.removeItem('FormsLoginUserName');  
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  Navigate(){
    this.router.navigate(['/user-profile']);
  }

}
