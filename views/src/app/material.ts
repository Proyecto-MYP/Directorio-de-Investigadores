import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule
 } from '@angular/material'
 import { MatListModule } from '@angular/material/list';

 @NgModule({
     imports: [
        MatListModule,
        MatButtonModule,
        MatIconModule
     ],
     exports: [
        MatListModule,
        MatButtonModule,
        MatIconModule
     ]
 })

 export class MaterialModule { }