import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "../Shared/Authentication";
// import 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            withCredentials: true
        });

        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
            .pipe(tap(data =>
                succ => { },
                err => {
                    if (err.status === 401)
                    {
                        this.router.navigateByUrl('login');
                    }
                    if (err.status === 400)
                    {
                        this.router.navigateByUrl('login');
                    }
                    if (err.status === 403)
                    {
                        this.router.navigateByUrl('login');
                    }
                    if (err.status === 404)
                    {
                        this.router.navigateByUrl('login');
                    }
                }
             ) );
        }
        else {
            this.router.navigateByUrl('login');
        }
    }
}