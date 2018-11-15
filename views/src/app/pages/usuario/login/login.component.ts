import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private titleService: Title,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Iniciar sesión');
  }

  iniciarSesion(){
    const correo = document.getElementById('correo') as HTMLInputElement;
    const contra = document.getElementById('contra') as HTMLInputElement;
    this.usuarioService.iniciarSesion(correo.value, contra.value);
  }

}
