import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[]=['Capitana Marvel', 'Viuda Negra', 'Bruja escarlata', 'Gamora'];
  heroeBorrado:string='';

  borrarHeroe() {
    this.heroeBorrado=this.heroes.shift() || '';
    //en el ngIf, angular sabe él solito que si el valor es vacío
    //o null o undefined, la condición es false
  }
}
