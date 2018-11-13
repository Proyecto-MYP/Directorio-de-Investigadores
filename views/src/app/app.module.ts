import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Pag404Component } from './pages/pag404/pag404.component';

import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/home/map/map.component';
import { EstadoComponent } from './pages/estado/estado.component';
import { InstitutosComponent } from './pages/institutos/institutos.component';
import { InvestigadoresComponent } from './pages/investigadores/investigadores.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ListaEstadosComponent } from './pages/estado/lista-estados/lista-estados.component';
import { DetalleEstadoComponent } from './pages/estado/detalle-estado/detalle-estado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    Pag404Component,
    MapComponent,
    InstitutosComponent,
    InvestigadoresComponent,
    AcercaComponent,
    EstadoComponent,
    ListaEstadosComponent,
    DetalleEstadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
