import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NewUser } from 'src/app/interfaces/newUser.interface';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  confirmEmail;
  signupForm: FormGroup;
  projectName;
  success = false;
  token;

  constructor(
    private userService: UserService,
    private titleService: Title,
    private site: ConfigService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Regístrate');
    this.projectName = this.site.getProjectName();
    this.signupForm = new FormGroup({
      username: new FormControl('', [
        Validators.minLength(4),
        Validators.pattern('[a-z0-9^\S]*')
      ]),
      email: new FormControl('', [
        Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')
      ]),
      password: new FormGroup({
        pass1: new FormControl('', [
          Validators.pattern('[a-zA-Z0-9^\S]*'),
          Validators.minLength(8)
        ]),
        pass2: new FormControl('', [
          Validators.pattern('[a-zA-Z0-9^\S]*'),
          Validators.minLength(8)
        ])
      })
    });
  }

  matchPasswords(group: FormGroup) {
    const pass1 = group.controls.pass1.value;
    const pass2 = group.controls.pass2.value;
    return pass1 === pass2;
  }

  registerUser() {
    const data = this.signupForm.value;
    const user: NewUser = {
      email: data.email,
      username: data.username,
      password1: data.password.pass1,
      password2: data.password.pass2
    };

    this.userService.registerUser(user).subscribe(data => {
      this.token = data['token'];
      this.confirmEmail = user.email;
      this.success = true;
    });
  }

}
