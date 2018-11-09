import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/home/map/map.component';

import { EstadoComponent } from './pages/estado/estado.component';
import { InstitutosComponent } from './pages/institutos/institutos.component';
import { InvestigadoresComponent } from './pages/investigadores/investigadores.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MapComponent,
    InstitutosComponent,
    InvestigadoresComponent,
    AcercaComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
