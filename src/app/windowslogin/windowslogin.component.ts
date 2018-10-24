import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from "@angular/router";
import { WindowsAuthentication } from '../Shared/WindowsAuthentication';
import { windowsModel } from '../Shared/windowsModel';

@Component({
  selector: 'app-windowslogin',
  templateUrl: './windowslogin.component.html',
  styleUrls: ['./windowslogin.component.scss']
})
export class WindowsloginComponent implements OnInit {

  constructor(private router:Router,private windowsAuthenticationService:WindowsAuthentication)
   { }

  ngOnInit() {
 
   this.windowsAuthenticationService.getAuthentication();
   this.router.navigate(['/dashboard']);

}

}
