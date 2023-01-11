import { Component, Input } from '@angular/core';
import { DanganronpaService } from '../services/danganronpa.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input() personajes:Personaje[]=[];
  //el input implica que lo que viene lo esamos trayendo del componente padre.
  //Y es una forma muy válida, sólo que ahora lo vamos a cambiar para hacerlo
  //con el servicio

  get personajes(){
    return this.danganronpaService.personajes;
  }

  constructor(private danganronpaService: DanganronpaService){}
}

