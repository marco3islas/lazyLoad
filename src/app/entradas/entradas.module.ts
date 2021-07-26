import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { ListadoComponent } from './pages/listado/listado.component';
import {EntradasRoutingModule} from './entradas-routing.module';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [
    AgregarComponent,
    HomeComponent,
    EntradaComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule,
    MaterialModule
  ]
})
export class EntradasModule { }
