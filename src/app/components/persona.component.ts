import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.module';

@Component({
    selector: 'app-personas-tag',
    templateUrl: './persona.component.html'
})

export class PersonasComponent {
    @Input() persona: Persona;
    @Output() clickSeleccionaPersona: EventEmitter<any> = new EventEmitter();

    clickPersona(): void{
        console.log('se ha seleccionado');
        this.clickSeleccionaPersona.emit(this.persona.nombre);
    }
}
