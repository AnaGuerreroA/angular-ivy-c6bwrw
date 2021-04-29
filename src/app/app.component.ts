import { Component } from '@angular/core';
import { Product } from './product.module';
import { Persona } from './persona.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'platzi-store';

  items = ['Julian', 'Nicolas', 'Pedro'];

  numeroUno = 0;
  numeroDos = 0;

  personas: Persona[] = [
    {
      id: 0,
      nombre: 'Ana',
      edad: 28,
      profesion: 'Programador'
    },
    {
      id: 1,
      nombre: 'Pedro',
      edad: 22,
      profesion: 'Camarero'
    },
    {
      id: 2,
      nombre: 'Humberto',
      edad: 50,
      profesion: 'Arquitecto'
    }
  ];

  products: Product[] = [
    {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '2',
    image: 'assets/images/hoodie.png',
    title: 'Hoodie',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '3',
    image: 'assets/images/mug.png',
    title: 'Mug',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '4',
    image: 'assets/images/pin.png',
    title: 'Pin',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '5',
    image: 'assets/images/stickers1.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '6',
    image: 'assets/images/stickers2.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  }];

  addItem(): void{
    this.items.push('nueva Persona');
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }

  clickProduct(id: number): void{
    console.log('product');
    console.log(id);
  }

  selectPersona(nombre: string): void{
    console.log(nombre);
  }

}
