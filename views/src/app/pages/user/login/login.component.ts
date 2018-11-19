import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private titleService: Title,
    private usrSrv: UserService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Iniciar sesión');
  }

  login() {
    const correo = document.getElementById('correo') as HTMLInputElement;
    const contra = document.getElementById('contra') as HTMLInputElement;
    this.usrSrv.login(correo.value, contra.value);
  }
}
