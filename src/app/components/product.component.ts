import { Component, Input, Output, EventEmitter } from '@angular/core'

import { Product } from "../product.module"

@Component({
    selector:'app_product',
    templateUrl:'./product.component.html'
})

export class ProductComponent {
    @Input() product : Product;
    @Output() clickAddProduct:EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log('se ha añadido un producto:')
        this.clickAddProduct.emit(this.product.id);
    }

}