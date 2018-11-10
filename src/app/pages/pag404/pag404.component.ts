import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag404',
  templateUrl: './pag404.component.html',
  styleUrls: ['./pag404.component.scss']
})
export class Pag404Component implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  irInicio(){
    this.router.navigate(['/']);
  }

}
