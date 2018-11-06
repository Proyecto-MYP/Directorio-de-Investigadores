import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstitutosComponent } from './institutos/institutos.component';
import { InvestigadoresComponent } from './investigadores/investigadores.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  {path: '',               component: HomeComponent},
  {path: 'institutos',     component: InstitutosComponent},
  {path: 'investigadores', component: InvestigadoresComponent},
  {path: 'acerca',         component: AcercaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
