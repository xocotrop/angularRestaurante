import { LoginService } from './security/login/login.service';
import { NotificationService } from './shared/messages/notification.service';
import { Observable } from 'rxjs/Observable';
import {HttpErrorResponse } from '@angular/common/http'
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import 'rxjs/add/observable/throw'

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

    constructor(private ns: NotificationService, 
                private injector: Injector, 
                private zone: NgZone){
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any){
        if(errorResponse instanceof HttpErrorResponse){
            const message = errorResponse.error.message
            this.zone.run(() => {
                switch(errorResponse.status){
                    case 401:
                        this.injector.get(LoginService).handleLogin()
                    break;
                    case 403: 
                        this.ns.notify(message || 'não autorizado')
                    break;
                    case 404:
                        this.ns.notify(message || 'Recurso nao encontrado. verifique o console para mais detalhes')
                    break;
                }
            })
        }
        
        super.handleError(errorResponse)

        // let errorMessage: string

        // if(error instanceof HttpErrorResponse){
        //     const body = error.error
        //     errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        // }
        // else {
        //     errorMessage = error.toString()
        // }


    }
}