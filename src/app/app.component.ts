import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-bar></app-top-bar>
    <!--Below tag need to be commented out to add router-outlet tag-->
    <!--app-product-list></app-product-list-->
    
    <!-- The routed views render in the <router-outlet>-->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'My Store';
}