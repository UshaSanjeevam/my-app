import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Logout() {
    localStorage.removeItem('userToken');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
