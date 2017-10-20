import { AuthInterceptor } from './../security/auth.interceptor';
import { LeaveOrderGuard } from './../order/leave-order.guard';
import { LoggedInGuard } from './../security/loggedin.guard';
import { LoginService } from './../security/login/login.service';
import { NotificationService } from './messages/notification.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartSerivce } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RattingComponent } from './ratting/ratting.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations : [
        InputComponent,
        RadioComponent,
        RattingComponent,
        SnackbarComponent
    ],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RattingComponent,
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule,
        SnackbarComponent
    ]
})
export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule : SharedModule,
            providers : [
                ShoppingCartSerivce,
                OrderService,
                RestaurantsService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuard,
                {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true}
                
            ]
        }
    }
}