import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '@services/authenticate/authenticate.service';
import { Credentials } from '@models:/credentials';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  alertMessage?: string;
  isLoading = false;

  constructor(private fb: FormBuilder, private authenticateService: AuthenticateService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [null, null]
    });
  }

  onSubmit() {
    this.isLoading = true;
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid){
      const credentials = new Credentials(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
      if (this.loginForm.controls['remember'].value) {
        //TODO remember credentials by session or localstorage...
      }
      this.authenticateService.authenticateUser(credentials).then(
        (res) => {
          this.alertMessage = 'success';
          this.router.navigate(['dishes']);
          this.isLoading = false;
          setTimeout(() => {
            this.alertMessage = "";
          }, 10000);
        },
        (err) => {
          this.alertMessage = 'error';
          this.isLoading = false;
          setTimeout(() => {
            this.alertMessage = "";
          }, 10000);
        }
      );
    }
    this.isLoading = false;
  }
}
