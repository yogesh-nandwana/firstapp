import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  template: `
  <p *ngIf="prod && prod.price > 700">
    <button (click)="notify.emit()">Notify Me</button>
  </p>
  `,
  styles: [
  ]
})
export class ProductAlertsComponent implements OnInit {
  @Input() prod!: Product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}