import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '@models:/user.model';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  alertMessage?: string;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.minLength(5)]],
      confirmPassword: [null, [Validators.required]]
    }, { validator: this.comparePasswordInputs });
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

  onSubmit(): void {
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }

    if (this.registerForm.valid) {
      const user = new UserModel(
        this.registerForm.controls['firstname'].value,
        this.registerForm.controls['lastname'].value,
        this.registerForm.controls['email'].value,
        this.registerForm.controls['password'].value,
        '',
        false);

      //TODO redux...
      this.userService.registerUser(user).then(
        (res) => {
          this.alertMessage = 'success';
        },
        (err) => { this.alertMessage = 'error';}
      );
    }
  }
}
