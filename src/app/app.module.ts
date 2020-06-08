import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { FiltersComponent } from './components/shopping-card/filters/filters.component';
import { ProductListComponent } from './components/shopping-card/product-list/product-list.component';
import { CartItemComponent } from './components/shopping-card/cart/cart-item/cart-item.component';
import { CartComponent } from './components/shopping-card/cart/cart.component';
import { ProductItemComponent } from './components/shopping-card/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ShoppingCardComponent,
    FiltersComponent,
    ProductListComponent,
    CartItemComponent,
    CartComponent,
    ProductItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
