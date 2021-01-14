import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '@services/user/user.service';
import {CredentialsModel} from '@models:/credentials.model';

@Component({
  selector: 'app-email-request',
  templateUrl: './email-request.component.html',
  styleUrls: ['./email-request.component.scss']
})
export class EmailRequestComponent implements OnInit {
  forgotForm!: FormGroup;
  alertMessage?: string;
  isLoading = false;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: [null, [Validators.required]]
    });
  }

  onSubmit(){
    this.isLoading = true;
    for (const i in this.forgotForm.controls) {
      this.forgotForm.controls[i].markAsDirty();
      this.forgotForm.controls[i].updateValueAndValidity();
    }

    if (this.forgotForm.valid){
      let email = this.forgotForm.controls['email'].value;
      const credentials = new CredentialsModel(email, '')
      this.userService.resetPassword(credentials).then(
        (res) => {
          this.alertMessage = 'success';
          this.isLoading = false;
        },
        (err) => {
          this.alertMessage = 'error';
          this.isLoading = false;
        }
      );
    }
  }
}
