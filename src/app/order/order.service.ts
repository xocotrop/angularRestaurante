import { LoginService } from './../security/login/login.service';
import { MEAT_API } from './../app.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from 'app/order/order.model';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartSerivce } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartSerivce, 
        private http: HttpClient, 
        private loginService: LoginService){}

    cartItems() : CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    itemsValue() : number {
        return this.cartService.total()
    }

    // checkOrder(order: Order): Observable<Order>{

    //     const headers = new Headers()
    //     headers.append('Content-type', 'application/json')

    //     return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), 
    //     new RequestOptions({ headers: headers}))
    //     .map(response => response.json())
        
    // }

    checkOrder(order: Order): Observable<String>{

        // const headers = new Headers()
        // headers.append('Content-type', 'application/json')

        let headers = new HttpHeaders()
        if(this.loginService.isLoggedIn()){
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }

        return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
        .map(order => order.id)
        
    }

    clear(){
        this.cartService.clear()
    }
}