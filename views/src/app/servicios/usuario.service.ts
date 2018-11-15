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

  getSesion(){
    return this.sesion;
  }

}
