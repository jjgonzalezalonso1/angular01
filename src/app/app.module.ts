import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [ //colocamos componentes
    AppComponent,
   ],
  imports: [
    ContadorModule,
    HeroesModule,
    BrowserModule, //otros modulos
  ],
  providers: [], //servicios especificos a un módulo
  bootstrap: [AppComponent] //el componente que quiero lanzar primero
})
export class AppModule { }
