import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  parsedata:any;
  username:any;
  constructor(private router:Router) { }

  ngOnInit() {
    //Windows login
  if(localStorage.getItem("WindowsLoginUser")!=(null || undefined))
  {
    this.parsedata=JSON.parse(localStorage.getItem("WindowsLoginUser"));
    this.username=this.parsedata.authenticated;
 
  }
//Forms login
  else if(localStorage.getItem("FormsLoginUserName")!=(null || undefined))
  {
    this.parsedata=(localStorage.getItem("FormsLoginUserName"));
    this.username=this.parsedata;
  }
  
  }
  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('WindowsLoginUser');   
    localStorage.removeItem('FormsLoginUserName');   
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
