import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from '../heroes/heroes.module';



@NgModule({
  declarations: [
    ContadorComponent,
  ],
  exports: [
    ContadorComponent,
  ],
  imports: [
    CommonModule,
    HeroesModule,
  ]
})
export class ContadorModuleModule { }
