import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping-info',
  template: `
  <h3>Shipping Prices</h3>
  <div class="shipping-item" *ngFor="let shipping of shippingCosts | async">
    <span>{{ shipping.type }}</span>
    <span>{{ shipping.price | currency }}</span>
  </div>
  <a href="cart">  back</a>
  `,
  styles: []
})
export class ShippingInfoComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {}
}
