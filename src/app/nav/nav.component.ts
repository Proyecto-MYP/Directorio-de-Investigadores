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
    if(localStorage.getItem('remNav')) this.toggleNav();
    onresize = this.onResize;
  }

  toggleNav(){
    this.contracted = !this.contracted;
    let $header:HTMLElement = document.getElementsByTagName('header')[0];
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

  showResponsiveMenu(){
    let $header:HTMLElement = document.getElementsByTagName('header')[0];
    $header.classList.toggle('show');
  }

  onResize(){
    let $header:HTMLElement = document.getElementsByTagName('header')[0];
    if(innerWidth < 768){
      $header.classList.remove('contracted');
    }else{
      $header.classList.remove('show');
    }
  }

}
