import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  projectAcronym;
  contracted = false;
  navLinks;

  constructor(
    private site: ConfigService,
    private usrSrv: UserService
  ) { }

  ngOnInit() {
    this.site.getConfig().subscribe(data => {
      this.projectAcronym = data['projectAcronym'];
    });

    if (localStorage.getItem('remNav')) { this.toggleNav(); }
    onresize = this.onResize;
    this.navLinks = [
      {
        route: '/',
        icon:  'fa-home',
        text:  'Inicio'
      },
      // {
      //   route: '/institutos',
      //   icon:  'fa-university',
      //   text:  'Institutos'
      // },
      {
        route: '/estado',
        icon:  'fa-map',
        text:  'Estados'
      },
      // {
      //   route: '/investigadores',
      //   icon:  'fa-users',
      //   text:  'Investigadores'
      // },
      // {
      //   route: '/acerca',
      //   icon:  'fa-question',
      //   text:  'Acerca...'
      // },

    ];

    if (!this.usrSrv.getSesion()) {
      this.navLinks.push({
        route: '/login',
        icon:  'fa-sign-in-alt',
        text:  'Entrar'
      });
    } else {
      this.navLinks.push({
        route: '/tablero',
        icon:  'fa-dashboard',
        text:  'Tablero'
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
