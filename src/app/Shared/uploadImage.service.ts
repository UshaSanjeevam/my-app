import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpResponse,HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";
import {Http,  Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class uploadimageservice{
    private options = new RequestOptions({ withCredentials: true });
    
    constructor(private http:HttpClient,private _http:Http){}
        postFile(caption:string,FiletoUpload:File):Observable<any>{

            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json'
                })
              };
            const endpoint="http://localhost:42512/api/MasterImageUpload";
            const formdata:FormData =new FormData();
            formdata.append('image',FiletoUpload,FiletoUpload.name);
            formdata.append('Imagecaption','caption');
return this.http.post<any>(endpoint,formdata,httpOptions)

        
    }
    postFiles(caption:string,FiletoUpload:File):Observable<any>{
        const formdata:FormData =new FormData();
        formdata.append('image',FiletoUpload,FiletoUpload.name);
        formdata.append('Imagecaption','caption');
        var headerOptions = new Headers({'Content-Type':'application/json'});
        var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
        return this._http.post('http://localhost:42512/api/ImageUpload',formdata,requestOptions).pipe(map(x => x.json()));

    
}
}
