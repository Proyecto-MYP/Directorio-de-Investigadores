import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(
    private titleService: Title, 
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Regístrate');
  }

  registerUser(){
  	const username = document.getElementById('username') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const password_confirmation = document.getElementById('password_confirmation') as HTMLInputElement;
    
    this.usuarioService.registerUser(username.value, email.value, password.value, password_confirmation.value);
  }

}