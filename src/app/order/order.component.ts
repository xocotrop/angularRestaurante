import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from "app/order/order.model";
import 'rxjs/add/operator/map';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value : 'MON'},
    {label: 'Cartão de Débito', value : 'DEB'},
    {label: 'Cartão Refeição', value : 'REF'}
    

  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue() : number{
    return this.orderService.itemsValue()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  checkOrder(order: Order){

    order.orderItems = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))

      this.orderService.checkOrder(order).subscribe((orderId: string) => {
          console.log(`compra concluida: ${orderId}`)
          this.orderService.clear()
      })

    console.log(order)
  }

}
