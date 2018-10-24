import {ErrorHandler, Injectable,Injector} from '@angular/core';
import {  Router } from '@angular/router';
import { LoggerService } from './LoggerService';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) { }    


  handleError(error:any) {
    // Do something with the error
    let router=this.injector.get(Router);
    console.log('URL: ' + router.url);
    

    //Error logger
    let logger=this.injector.get(LoggerService);
    logger.log(error); 
    
    if (error instanceof HttpErrorResponse) {
      //Backend returns unsuccessful response codes such as 404, 500 etc.				  
      console.error('Backend returned status code: ', error.status);
      console.error('Response body:', error.message);          	  
  } else {
      //A client-side or network error occurred.	          
      console.error('An error occurred:', error.message);          
  }     
  router.navigate(['/login']);
}

}