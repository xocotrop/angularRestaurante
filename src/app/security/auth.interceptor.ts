import { LoginService } from './login/login.service';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHandler, HttpRequest, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    

    constructor(private injector: Injector){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService)

        if(loginService.isLoggedIn()){
            const authRequest = req.clone({setHeaders: {'Authorization': `Bearer ${loginService.user.accessToken}`}})
            return next.handle(authRequest)
        } else {
            return next.handle(req)
        }

        /*
        let headers = new HttpHeaders()
        if(this.loginService.isLoggedIn()){
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }
        */
    }

}