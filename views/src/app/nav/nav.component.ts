import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  contracted = false;
  projectAcronym;
  navLinks;

  constructor(
    private site: ConfigService,
    private usrSrv: UserService
  ) { }

  ngOnInit() {
    this.projectAcronym = this.site.getProjectAcronym();
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
    const $caret: HTMLElement = document.querySelector('#contract-btn>a');

    if (this.contracted) {
      // Contraer el nav
      localStorage.setItem('remNav', '1');
      $caret.innerHTML = '<i class="fas fa-caret-right"></i>';
    } else {
      // Expandir el nav
      localStorage.removeItem('remNav');
      $caret.innerHTML = '<i class="fas fa-caret-left"></i>';
    }
    return false;
  }

  onResize() {
    if ( innerWidth < 768 ) {
      this.contracted = true;
    } else {
      this.contracted = !!localStorage.getItem('remNav');
    }
  }

}
