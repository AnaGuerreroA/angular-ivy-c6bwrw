import { Component } from '@angular/core'

@Component({
    selector: 'personas-tag',
    templateUrl: './persona.component.html'
})


export class Personas {
    persona = [{
        nombre: 'Ana',
        edad: 28,
        profesion: 'Programador'
    },
    {
        nombre: 'Pepe',
        edad: 31,
        profesion: 'Arquitecto'
    }
]
}