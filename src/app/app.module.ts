import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit ,
  DoCheck, OnChanges, OnDestroy, OnInit,  Input, SimpleChanges } from '@angular/core';
import {NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomersComponent } from './customers/customers.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule} from '@angular/forms';
import { HttpModule,Headers,Http, } from '@angular/http';
import { DropdownComponent } from './dropdown/dropdown.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {dropdownpipe} from './dropdown/dropdown.pipe';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import {weatherForecast} from './weather-forecast/weatherForecast.service';
import { RouterModule, Routes } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {ErrorHandler, Injectable} from '@angular/core';
import { CustomErrorHandlerService } from './Shared/CustomErrorHandler';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {UserService} from './Shared/Authentication';
import { loginAuthenticateService } from './login/loginAuthenticateService';
import { WindowsAuthentication } from './Shared/WindowsAuthentication';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SinupComponent } from './sinup/sinup.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WindowsloginComponent } from './windowslogin/windowslogin.component';
import { MainComponent } from './main/main.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ManageColorsComponent } from './manage-colors/manage-colors.component';
import {authenticationWindows} from './Shared/authenticationWindows';
import { RegistrationComponent } from './registration/registration.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AdminComponent } from './admin/admin.component';
import { uploadimageservice } from './Shared/uploadImage.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component:MainComponent},
//   { path: "home", component:HomeComponent,
//   children: [
//     { path: 'login', component: LoginComponent},
//     { path: 'windowslogin', component: WindowsloginComponent},
//   ]
  
// },
{ path: "home", component:HomeComponent},
{ path: "login", component:LoginComponent},
{path: "admin",component: AdminComponent,
children:
[
    { path: 'upload-image', component: UploadImageComponent},
] ,
canActivate: [ AuthGuard ] 
},
  { path:'dashboard',component:DashboardComponent,
  children: [
  { path: 'customers', component: CustomersComponent},
  { path: "search", component: SearchComponent },
  { path: "customers", component: CustomersComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "weather-forecast", component: WeatherForecastComponent },
  { path: "progressbar", component: ProgressbarComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "logout", component: LogoutComponent },
  ]
  ,
   canActivate: [ AuthGuard ] 
  },
  {path :"global-error", component:GlobalErrorComponent},
  {path: '**', component:MainComponent},
]
;

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomersComponent,
    DropdownComponent,
    dropdownpipe,
    dropdownpipe,
    WeatherForecastComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SinupComponent,
    LogoutComponent,
    DashboardComponent,
    WindowsloginComponent,
    MainComponent,
    GlobalErrorComponent,
    ProgressbarComponent,
    ManageColorsComponent,
    RegistrationComponent,
    UploadImageComponent,
    AdminComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),

  
  ],
  providers: [
  //   CustomErrorHandlerService,
  //   {
  //   provide: ErrorHandler,
  //   useClass: CustomErrorHandlerService
  // },
  loginAuthenticateService,AuthGuard,WindowsAuthentication,authenticationWindows,uploadimageservice
  ,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
 
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
