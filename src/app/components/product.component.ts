import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.module';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @Input() product: Product;
    @Output() clickAddProduct: EventEmitter<any> = new EventEmitter();

    addCart(): void{
        console.log('se ha añadido un producto:');
        this.clickAddProduct.emit(this.product.id);
    }
}
