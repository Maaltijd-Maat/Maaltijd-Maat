import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '@services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CredentialsModel} from '@models:/credentials.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changeForm!: FormGroup;
  alertMessage?: string;
  token?: string;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute) {
    // Retrieve token string from the token resolver.
    this.route.data.subscribe((data) => {
      this.token = data.token;
    });
    if (this.token?.length != 36) this.router.navigate(['/login']);
  }

  /**
   * Compare the password input fields for differences.
   * @param registerForm the form controls
   */
  comparePasswordInputs(registerForm: FormGroup) {
    let password = registerForm.controls['password'].value;
    let confirmPassword = registerForm.controls['confirmPassword'].value;
    return password === confirmPassword ? null : { notSame: true };
  }

  ngOnInit(): void {
    this.changeForm = this.fb.group({
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    }, { validator: this.comparePasswordInputs });
  }

  onSubmit(){
    for (const i in this.changeForm.controls) {
      this.changeForm.controls[i].markAsDirty();
      this.changeForm.controls[i].updateValueAndValidity();
    }

    if (this.changeForm.valid && this.token != null){
      const credentials = new CredentialsModel(this.token, this.changeForm.controls['password'].value);
      this.userService.changePasswordWithPasswordToken(credentials).then(
        (res) => {
          this.alertMessage = 'success';
        },
        (err) => { this.alertMessage = 'error';}
      );
    }
  }
}
