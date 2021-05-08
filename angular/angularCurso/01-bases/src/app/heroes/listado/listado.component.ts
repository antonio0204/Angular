import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

heroes: string[] = ['spiderman', 'Iroman', 'Hulk', 'Thor'];
heroeBorrado: string = '';


cambiarHeroe():void {

  this.heroeBorrado = this.heroes.shift() || '';

  }
}
