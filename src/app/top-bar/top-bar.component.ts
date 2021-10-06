import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <h1>My Store</h1>
    <a class="button fancy-button"><i class="material-icons">shopping_cart</i>Checkout</a>
  `,
  styles: [
  ]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
