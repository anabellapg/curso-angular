import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/danganronpa.interface";

@Injectable()
export class DanganronpaService{
    private _personajes: Personaje[]=[
        {
          nombre: 'Monokuma',
          poder:700
        },
        {
          nombre: 'Enoshima Junko',
          poder:15000
        },
        {
          nombre: 'Togami Byakuya',
          poder:500
        }
      ];
      get personajes():Personaje[]{
        return [...this._personajes];
      }

      //no tengo muy claro por qué se pone el spread ahí. Es una buena práctica
      //de javascript para "romper la referencia"; entiendo que para pasar una copia
      //y no el objeto en sí
      

      /*A ver, lo del get. El get está estableciendo un método de la clase
      DanganronpaService pero que no tiene que ser llamada como un método (.personajes())
      sino que simplemente pones .personajes, como si fuera una propiedad */

      /*Lo mismo que pasa en get del agregar component, cuyo return llama al get
      del danganronpa.service*/

      agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
      }

}

/*los servicios se usan para distribuir la información del MainPage, para especificar
cómo se relaciona con cada componente*/

/*la barra baja sólo es un estándar, pero la palabra private hace que la propiedad
personajes sea privada y por tanto no se pueda editar accidentalmente en otro lado*/