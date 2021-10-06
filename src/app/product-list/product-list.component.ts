import { Component, OnInit } from '@angular/core';
import { Product,products } from '../products';


@Component({
  selector: 'app-product-list',
  template: `
    <h2>Products</h2>
    <div *ngFor='let p of prods'>
      <a [title]="p.name+' details'">
      <h3>{{p.name}}</h3>
      </a>      

      <p *ngIf="p.description">
        Description: {{ p.description }}
      </p>

      <button (click)="share()">
        Share
      </button>
    </div>
  `,
  styles: [
  ]
})
export class ProductListComponent implements OnInit {
  prods:Product[] = products;
  constructor() { }

  ngOnInit(): void {
  }

  share(){
    alert('The product has been shared.');
  }

}
