import { Component } from '@angular/core';
import { Personaje } from '../interfaces/danganronpa.interface';
import { DanganronpaService } from '../services/danganronpa.service';

/*se pueden poner interfaces fuera del export class MainPageComponent porque
si no las vamos a usar en otras páginas, no hay que exportarlas*/

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo:Personaje={
    nombre: '',
    poder:0
  }
  
}

/* Otra forma de conseguir los personajes sería inicializarlos como un array vacío
y luego hacer:

constructor(private danganronpaService: DanganronpaService){
    this.personajes=this.danganronpaService.personajes;
  }

Y otra forma más sería meter el servic en el constructor pero dejando las llaves 
vacías,

get personajes():Personaje[]{
    return this.danganronpaService.personajes;
  }

  */