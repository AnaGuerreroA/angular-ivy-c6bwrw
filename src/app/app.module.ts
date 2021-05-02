import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { PersonasComponent } from './components/persona.component';
import { CartComponent } from './cart/cart.component';
import { SumaPipe } from './suma.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PersonasComponent,
    CartComponent,
    SumaPipe,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FotterComponent,
    BannerComponent,
    PageNotFundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
