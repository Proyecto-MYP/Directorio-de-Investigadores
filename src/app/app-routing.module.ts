import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pag404Component } from './pages/pag404/pag404.component';
import { HomeComponent } from './pages/home/home.component';
import { InstitutosComponent } from './pages/institutos/institutos.component';
import { EstadoComponent } from './pages/estado/estado.component';
import { InvestigadoresComponent } from './pages/investigadores/investigadores.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const routes: Routes = [
  {path: '',               component: HomeComponent},
  {path: 'institutos',     component: InstitutosComponent},
  {path: 'estado/:clave',  component: EstadoComponent},
  {path: 'investigadores', component: InvestigadoresComponent},
  {path: 'acerca',         component: AcercaComponent},
  {path: '**',             component: Pag404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
