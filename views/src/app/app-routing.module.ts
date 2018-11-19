import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pag404Component } from './pages/pag404/pag404.component';
import { HomeComponent } from './pages/home/home.component';
import { StateComponent } from './pages/state/state.component';
import { LoginComponent } from './pages/user/login/login.component';
import { SignupComponent } from './pages/user/signup/signup.component';

const routes: Routes = [
  {path: '',            component: HomeComponent},
  {path: 'estado',      component: StateComponent},
  {path: 'estado/:key', component: StateComponent},
  {path: 'login',       component: LoginComponent},
  {path: 'registro',    component: SignupComponent},
  {path: '**',          component: Pag404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
