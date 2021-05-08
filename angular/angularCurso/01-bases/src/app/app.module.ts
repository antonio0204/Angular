import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { HeroesModule } from './heroes/heroes.module';
import { ContadorModuleModule } from './contador/contador-module.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModuleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
