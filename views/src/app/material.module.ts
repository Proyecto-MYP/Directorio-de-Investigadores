import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
 } from '@angular/material';
 import { MatListModule } from '@angular/material/list';

 @NgModule({
     imports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatInputModule
     ],
     exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatInputModule
     ]
 })

 export class MaterialModule { }
