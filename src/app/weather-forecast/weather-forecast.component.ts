import { Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit ,
  DoCheck, OnChanges, OnDestroy, OnInit,  Input, SimpleChanges  } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { weatherForecast } from './weatherForecast.service';
import { Subject,Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { Weather } from './weatherIntercace';
import {NgbDropdownConfig, NgbDropdown,NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownToggle } from '../../../node_modules/@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import { Forecast } from './Forecast';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CustomErrorHandlerService } from '../Shared/CustomErrorHandler';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  providers: [weatherForecast]
 
})
export class WeatherForecastComponent  implements OnInit
{
  private APPID: string;
  private API_URL: string;
  constructor( private weatherSer:weatherForecast,private http:Http,private spinnerService: Ng4LoadingSpinnerService)
   {}
   
    errorService:CustomErrorHandlerService
   weatherClass:Weather;
   forecast:Forecast[]=[];
   location;
  
   
   ngOnInit() {
   
    this.spinnerService.show();
    this.spinnerService.show.call(this.currentLocation())
    this.spinnerService.hide();
   }
   
    public currentLocation(){
      
      return new Promise((res, rej)=>{
     
        navigator.geolocation.getCurrentPosition((pos) => {
          
          this.location = pos.coords;
          if (location.protocol != 'https:')
{
 // location.protocol = "https:";
 if(  window.location.hostname !="localhost")
 {
  window.location.href = window.location.href.replace('http', 'https')
 }
}
          const lat = this.location.latitude;
          const lon = this.location.longitude;
          console.log(`lat ${lat} and lon ${lon}`);
 this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=2087bd0368cac0ba40dea7f3529d05a4&lat=${lat}&lon=${lon}&units=imperial`).
 pipe(map(res => res.json())).toPromise().then(
              (data) => {
                if(data.weather.length>0 && data.weather.length!=undefined)
        {
              this.weatherClass = new Weather(data.name, data.main.temp, data.weather[0].description, data.main.temp_min, data.main.temp_max,data.main.humidity,data.weather[0].icon);
              res(this.weatherClass);
              return this.weatherClass;
        }
            })
          
          
        })
     
      
      })
 
    }
  onSubmit(event: Event, cityName: string){
    this.forecast.splice(0, this.forecast.length);
    this.weatherSer.otherForecast(cityName).subscribe(
      (data) =>{
        console.log(data);
        if(data.weather.length>0 && data.weather.length!=undefined)
        {
          const forecastWeather = new Forecast(data.name,
            data.dt,
                                                data.weather[0].description,
                                                data.main.temp_min,
                                                data.main.temp_max,
                                                data.main.temp,
                                                data.main.humidity,
                                                data.weather[0].icon,
                                                
                                                );
          // console.log(forecastWeather);
          this.forecast.push(forecastWeather);
                                              }
        
        console.log(this.forecast);
        return this.forecast;
      }
    )
  }
  
}


