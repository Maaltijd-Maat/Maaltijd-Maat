import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '@models:/user';
import {UserService} from '@services/user/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  alertMessage?: string;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() : void{
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [null, null]
    });
  }

  onSubmit() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid){
      const login = new User(
        '',
        '',
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value,
        '',
        true,
        []
        );

      this.userService.authenticateUser(login).then(
        (res) => {
          this.alertMessage = 'success';
        },
        (err) => { this.alertMessage = 'error';}
      );
    }
  }
}
