import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from "./Component/topo/topo.component";
import { PainelComponent } from './Component/painel/painel.component';
import { TentativasComponent } from './Component/tentativas/tentativas.component';
import { ProgressoComponent } from './Component/progresso/progresso.component';

@NgModule({
  declarations: [
    AppComponent, 
    TopoComponent, 
    PainelComponent, TentativasComponent, ProgressoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
