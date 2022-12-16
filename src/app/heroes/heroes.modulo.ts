import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
        //sólo exporto este porque es el que quiero que salga en la app ahora mismo
    ],
    imports:[
        CommonModule
        //esto es importante porque es lo que nos permite poner directivas
    ]
    
})
export class HeroesModule{}