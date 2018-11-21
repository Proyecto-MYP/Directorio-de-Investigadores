import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pag404Component } from './pages/pag404/pag404.component';
import { HomeComponent } from './pages/home/home.component';
import { StatesListComponent } from './pages/state/states-list/states-list.component';
import { StateDetailsComponent } from './pages/state/state-details/state-details.component';
import { LoginComponent } from './pages/user/login/login.component';
import { SignupComponent } from './pages/user/signup/signup.component';

const routes: Routes = [
  {path: '',            component: HomeComponent},
  {path: 'estado',      component: StatesListComponent},
  {path: 'estado/:key', component: StateDetailsComponent},
  {path: 'login',       component: LoginComponent},
  {path: 'registro',    component: SignupComponent},
  {path: '**',          component: Pag404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
