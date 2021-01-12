import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '@services/authenticate/authenticate.service';
import { CredentialsModel } from '@models:/credentials.model';

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
      const credentials = new CredentialsModel(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
      this.authenticateService.authenticateUser(credentials).then(
        (res) => {
          this.router.navigate(['/']);
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
  }
}
