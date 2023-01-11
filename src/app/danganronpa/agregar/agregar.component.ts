import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/danganronpa.interface';
import { DanganronpaService } from '../services/danganronpa.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() nuevo:Personaje={
    nombre: '',
    poder:0
  }

  constructor(private DanganronpaService: DanganronpaService){}

  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.DanganronpaService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
}

  /* Antes, de que lo cambiáramos por el servicio, este código era:  
  
  @Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter();
  lo que creo que está pasando es:
  output se usa cuando el hijo emite un valor al padre

  1. Con el output, declaro una especie de evento de emisión
  2. Más abajo, puedo usar esto para devolver cosas al padre
  3. Sin más que llamar al evento de emisión y al método emit
  4. Ese evento luego lo llamo en el html como siempre, con parentesis

  agregar(){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
//realmente ese agregar sólo está haciendo una validación, devolviendo un evento
//que lleva asociado el personaje válido y purgando el "nuevo"*/