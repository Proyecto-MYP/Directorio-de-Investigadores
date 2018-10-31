import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  contracted:boolean = false;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('remNav')) this.toogleNav();
  }

  toogleNav(){
    this.contracted = !this.contracted;
    let $header:HTMLElement = document.getElementsByTagName('header')[0];
    let $headerLink:HTMLElement = document.getElementById('header-link');
    let $mainNav:HTMLElement = document.getElementById('main-nav');
    let $labels:HTMLCollection = document.getElementsByClassName('nav-label');
    let $caret:HTMLElement = document.querySelector('#contract-btn>a');

    if(this.contracted){
      // Contraer el nav
      localStorage.setItem('remNav', '1');
      $header.classList.add('contracted');
      $caret.innerHTML = '<i class="fas fa-caret-right"></i>';
    }else{
      // Expandir el nav
      localStorage.removeItem('remNav');
      $header.classList.remove('contracted');
      $caret.innerHTML = '<i class="fas fa-caret-left"></i>';
    }
    return false;
  }

}
