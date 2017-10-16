import { state } from '@angular/animations';
import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor(private loginService: LoginService){}

    checkSuthentication(path: string) : boolean {
        const loggedIn = this.loginService.isLoggedIn()

        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`)
        }

        return true
    }

    canLoad(route: Route): boolean  {

        return this.checkSuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) : boolean{
        return this.checkSuthentication(activatedRoute.routeConfig.path)
    }

}