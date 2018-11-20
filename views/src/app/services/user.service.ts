import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {
      name: 'Juan',
      email: 'jmcareaga@ciencias.unam.mx',
      password: 'admin123'
    },
  ];

  session = false;

  constructor() { }

  login(email: string, pass: string) {
    if (!email || !pass) {
      return;
    }

    // Busca si el correo está en la lista de usuarios
    for (const usr of this.users) {
      if (usr.email === email) {
        if (usr.password === pass) {
          this.session = true;
          break;
        } else {
          break;
        }
      }
    }
    return this.session;
  }

  registerUser(username: string, email: string, password: string, password_confirmation: string) {
    if (!username || !email || !password || !password_confirmation) {
      return false;
    } else if (password !== password_confirmation) {
      return false;
    } else {
      for (const usr of this.users) {
        if (usr.name === username || usr.email === email) {
          console.log('El usuario ya existe en la base de datos');
          return false;
        }
      }
      this.users.push(
        {
          name: username,
          email: email,
          password: password
        }
      );
      console.log('Usuario registrado');
      return true;
    }
  }

  getSesion() {
    return this.session;
  }

}
