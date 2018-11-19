import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Pag404Component } from './pages/pag404/pag404.component';

import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/home/map/map.component';
import { StateComponent } from './pages/state/state.component';
import { StatesListComponent } from './pages/state/states-list/states-list.component';
import { StateDetailsComponent } from './pages/state/state-details/state-details.component';
import { LoginComponent } from './pages/user/login/login.component';
import { SignupComponent } from './pages/user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    Pag404Component,
    MapComponent,
    StateComponent,
    StatesListComponent,
    StateDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
