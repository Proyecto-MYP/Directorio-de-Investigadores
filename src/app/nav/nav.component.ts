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
      $header.style.width = 'auto';
      $caret.innerHTML = '<i class="fas fa-caret-right"></i>';
      $headerLink.classList.add('hidden');
      $mainNav.classList.add('nav-contracted');
      for(let i=0; i < $labels.length; i++){
        $labels[i].classList.add('hidden');
      }
    }else{
      // Expandir el nav
      $header.style.width = '15rem';
      $caret.innerHTML = '<i class="fas fa-caret-left"></i>';
      $headerLink.classList.remove('hidden');
      $mainNav.classList.remove('nav-contracted');
      for(let i=0; i < $labels.length; i++){
        $labels[i].classList.remove('hidden');
      }
    }
    return false;
  }

}
