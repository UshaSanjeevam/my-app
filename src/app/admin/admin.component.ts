import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit() {
  }
  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('WindowsLoginUser');   
    localStorage.removeItem('FormsLoginUserName');   
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
