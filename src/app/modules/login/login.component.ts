import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder, private authenticateService: AuthenticateService) {}

  ngOnInit(): void {
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

    if (this.loginForm.valid) {
      const credentials = new Credentials(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
      this.authenticateService.authenticateUser(credentials).then(
        () => {
          this.alertMessage = 'success';
        },
        () => { this.alertMessage = 'error';}
      );
    }
  }
}
