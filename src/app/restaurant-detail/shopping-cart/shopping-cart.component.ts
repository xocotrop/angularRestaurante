import { ShoppingCartSerivce } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartSerivce) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartService.items
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

  clear(){
    this.shoppingCartService.clear()
  }

}
