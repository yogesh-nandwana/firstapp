import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShippingInfoComponent } from './shipping-info/shipping-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartDetailComponent,
    ShippingInfoComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,   
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },      
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'shipping',component: ShippingInfoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
