import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private titleService: Title,
    private usrSrv:       UserService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Regístrate');
  }

  registerUser() {
    const username = document.getElementById('username') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const password_confirmation = document.getElementById('password_confirmation') as HTMLInputElement;

    this.usrSrv.registerUser(username.value, email.value, password.value, password_confirmation.value);
  }

}
