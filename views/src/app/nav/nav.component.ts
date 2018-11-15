import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  contracted = false;
  navLinks;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('remNav')) { this.toggleNav(); }
    onresize = this.onResize;
    this.navLinks = [
      {
        ruta:  '/',
        icono: 'fa-home',
        texto: 'Inicio'
      },
      {
        ruta:  '/institutos',
        icono: 'fa-university',
        texto: 'Institutos'
      },
      {
        ruta:  '/estado',
        icono: 'fa-map',
        texto: 'Estados'
      },
      {
        ruta:  '/investigadores',
        icono: 'fa-users',
        texto: 'Investigadores'
      },
      {
        ruta:  '/acerca',
        icono: 'fa-question',
        texto: 'Acerca...'
      },

    ];

    if (!this.usuarioService.getSesion()) {
      this.navLinks.push({
        ruta:  '/login',
        icono: 'fa-sign-in-alt',
        texto: 'Entrar'
      });
    } else {
      this.navLinks.push({
        ruta:  '/tablero',
        icono: 'fa-dashboard',
        texto: 'Tablero'
      });
    }
  }

  toggleNav() {
    this.contracted = !this.contracted;
    const $header: HTMLElement = document.getElementsByTagName('header')[0];
    const $caret: HTMLElement = document.querySelector('#contract-btn>a');

    if (this.contracted) {
      // Contraer el nav
      localStorage.setItem('remNav', '1');
      $header.classList.add('contracted');
      $caret.innerHTML = '<i class="fas fa-caret-right"></i>';
    } else {
      // Expandir el nav
      localStorage.removeItem('remNav');
      $header.classList.remove('contracted');
      $caret.innerHTML = '<i class="fas fa-caret-left"></i>';
    }
    return false;
  }

  showResponsiveMenu() {
    const $header: HTMLElement = document.getElementsByTagName('header')[0];
    $header.classList.toggle('show');
  }

  onResize() {
    const $header: HTMLElement = document.getElementsByTagName('header')[0];
    if (innerWidth < 768) {
      $header.classList.remove('contracted');
    } else {
      $header.classList.remove('show');
    }
  }

}
