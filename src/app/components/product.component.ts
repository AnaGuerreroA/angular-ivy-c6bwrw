import { Component } from '@angular/core'

import { Product } from "../product.module"

@Component({
    selector:'app_product',
    templateUrl:'./product.component.html'
})

export class ProductComponent {
    product:Product[] = [
        {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
      }
    ]
}