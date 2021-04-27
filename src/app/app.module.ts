import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { Personas } from './components/persona.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Personas
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
