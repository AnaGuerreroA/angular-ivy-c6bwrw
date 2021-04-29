import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { PersonasComponent } from './components/persona.component';
import { CartComponent } from './cart/cart.component';
import { SumaPipe } from './suma.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PersonasComponent,
    CartComponent,
    SumaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
