import {Component} from '@angular/core'

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre:string='Ironman';
    edad: number=45;

    get nombreMayuscula():string{
        return this.nombre.toUpperCase();
    }

    //Ese get parece un método, peor no lo es. Si nos fijamos, en el
    //html no se ha hecho una llamada a ninguna función, basta poner el nombre

    obtenerNombre():string{
        return `${this.nombre}-${this.edad}`
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=30;
    }
}


/* El proceso para crear un componente manualmente parece ser:

1. Creo una carpetita ("heroe")
2. Creo un archivo .ts para declarar la clase e indicar que es un componente (configurar el decorador)
3. Creo un archivo html para que se encargue de la estructura de la página
4. En app.module apunto el nuevo componente, en app.component html llamo al componente como si fuera una etiqueta html

Todo esto es un rollo, así que podemos simplemente escribir en la terminal:
ng g c heroes/heroe

y ya te crea todos los archivos y hasta actualiza el módulo correspondiente



*/