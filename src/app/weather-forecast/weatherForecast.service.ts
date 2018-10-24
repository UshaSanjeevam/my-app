import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { Weather } from './weatherIntercace';


@Injectable()
export class weatherForecast {

    private APPID: string;
    private API_URL: string;
    private weather:Weather[] = [] ;
  weatherClass:Weather;
  location;
  constructor(private http:Http) {
    
   }

  currentLocation(){
    return new Promise((res, rej)=>{
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const lon = this.location.longitude;
        console.log(`lat ${lat} and lon ${lon}`);
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=2087bd0368cac0ba40dea7f3529d05a4=${lat}&lon=${lon}&units=imperial`).pipe(map(res => res.json()));  
      })
    })
  }

  otherWeather(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&q=${city}&units=imperial&cnt=10`).pipe(map(res => res.json()));
  }

  otherForecast(city:string){
    this.APPID = '2087bd0368cac0ba40dea7f3529d05a4';
   this.API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    return this.http.get(this.API_URL + city + '&APPID=' + this.APPID+'&units=metric').pipe(map(res => res.json()));
  }
 
}
