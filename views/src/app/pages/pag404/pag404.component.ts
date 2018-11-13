import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag404',
  templateUrl: './pag404.component.html',
  styleUrls: ['./pag404.component.scss']
})
export class Pag404Component implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle('404 - Página no enconrada');
  }

  irInicio(){
    this.router.navigate(['/']);
  }

}
