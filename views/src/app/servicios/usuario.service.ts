import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios = [
    {
      nombre: 'Juan',
      correo: 'jmcareaga@ciencias.unam.mx',
      password: 'admin123'
    },
  ];

  sesion = false;

  constructor() { }

  iniciarSesion(correo: string, contra: string) {
    if (!correo || !contra) {
      return;
    }

    // Busca si el correo está en la lista de usuarios
    for (const usr of this.usuarios) {
      if (usr.correo === correo) {
        if (usr.password === contra) {
          this.sesion = true;
          console.log('Sesion iniciada');
          break;
        } else {
          break;
        }
      }
    }
    return this.sesion;
  }

  registerUser(username: string, email: string, password: string, password_confirmation: string) {
    if (!username || !email || !password || !password_confirmation) {
      return false;
    }

    else if (password !== password_confirmation) {
      return false;
    }

    else {
      for (const usr of this.usuarios) {
        if (usr.nombre === username || usr.correo === email) {
          console.log('El usuario ya existe en la base de datos');
          return false;
        }
      }
      this.usuarios.push(
        {
          nombre: username,
          correo: email,
          password: password
        }
      );
      console.log('Usuario registrado');
      return true;
    }
  }

  getSesion(){
    return this.sesion;
  }

}
