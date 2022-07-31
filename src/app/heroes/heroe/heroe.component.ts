import { Component } from "@angular/core";

//escribo @Component y pulso talbulador, 
//se escribe el import
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
//creo la propiedad nombre
    nombre: string = 'Ironman';
    edad  : number = 45

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return this.nombre + ' - ' + this.edad;
        //return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre ='Spiderman';
    }
    cambiarEdad(): void {
        console.log('Key!!!');
        this.edad = 30;
    }
}