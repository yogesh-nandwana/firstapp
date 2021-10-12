import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  template: `
  <h2>Product Details</h2>
  <div *ngIf="product">
    <h3>{{ product.name }}</h3>
    <h4>{{ product.price | currency }}</h4>
    <p>{{ product.description }}</p>
    <button (click)="addToCart(product)">Buy</button>
  </div>
  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; /** product can be either of type Product or undefined */
  constructor(private route: ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
     // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`Your product: ${product.name} has been added to the cart!`);
  }
}