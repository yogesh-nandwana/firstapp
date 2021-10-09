import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  template: `
  <p *ngIf="prod && prod.price > 700">
    <button (click)="notify.emit()">Notify Me</button>
  </p>
  `,
  styles: []
})
export class ProductAlertsComponent implements OnInit {
  @Input() prod!: Product;
  /**
   * non-null assertion operator (!)
   * in plain English,when you add an exclamation mark after variable/property name, you're telling to TypeScript that you're certain that value is not null or undefined.
   */
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}