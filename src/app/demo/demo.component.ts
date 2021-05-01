import { Component, OnInit } from '@angular/core';

import { Persona } from '../persona.module';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void{
    this.items.push('nueva Persona');
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }  

  selectPersona(nombre: string): void{
    console.log(nombre);
  }

}
