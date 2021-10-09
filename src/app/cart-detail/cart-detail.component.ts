import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-detail',
  template: `
    <h3>Cart</h3>

    <div class="cart-item" *ngFor="let item of items">
      <span>{{ item.name }}</span>
      <span>{{ item.price | currency }}</span>
    </div>
  `,
  styles: [
  ]
})
export class CartDetailComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
