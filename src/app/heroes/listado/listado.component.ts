import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroes: string []=['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string ='';

  borrarHeroe(){
    //this.heroes.pop(); // borra el último elemento
    //this.heroes=[];      //borra todo
    this.heroeBorrado =  this.heroes.shift() || '';  // borra el primer elemento y retorna su valor
    //Ctrl + barra espaciadora para ver la ayuda
    //|| ''  si es undefined devuelve un string vacio ''
    console.log(this.heroeBorrado);
  }
}
