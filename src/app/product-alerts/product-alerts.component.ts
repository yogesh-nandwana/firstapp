import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  template: `
  <p *ngIf="prod && prod.price > 700">
    <button (click)="notify()">Notify Me</button>
  </p>
  `,
  styles: [
  ]
})
export class ProductAlertsComponent implements OnInit {
  @Input() prod!: Product;
  constructor() { }

  ngOnInit(): void {
  }

  notify(){
    alert("Notified");
  }

}
