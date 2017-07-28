import { RestaurantsService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartSerivce } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from '@angular/core';
@NgModule({
    providers: [
        ShoppingCartSerivce,
        OrderService,
        RestaurantsService
    ]
})
export class CoreModule{

}