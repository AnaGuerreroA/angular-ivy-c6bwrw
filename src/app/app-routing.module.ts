import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: "**",
    component: PageNotFundComponent
  }
];

@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
