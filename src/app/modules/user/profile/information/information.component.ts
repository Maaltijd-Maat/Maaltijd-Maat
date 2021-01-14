import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser, UserModel} from '@models:/user.model';
import {UserService} from '@services/user/user.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  informationForm!: FormGroup;
  user!: IUser;
  alertMessage?: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
    // Retrieve user object from the user resolver
    this.route.data.subscribe((data) => {
      this.user = data.user;
    });

    this.informationForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      primaryEmail: [null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      secondaryEmail: [null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    });
  }

  ngOnInit(): void {

  }

  submitForm() {
    for (const i in this.informationForm.controls) {
      this.informationForm.controls[i].markAsDirty();
      this.informationForm.controls[i].updateValueAndValidity();
    }
    if (this.informationForm.valid){
      const user = new UserModel(
        this.informationForm.controls['firstname'].value,
        this.informationForm.controls['lastname'].value,
        this.informationForm.controls['primaryEmail'].value,
        '',
        '',
        false,
        this.informationForm.controls['secondaryEmail'].value
      );

      this.userService.updateUser(user).then(
        () => {
          this.alertMessage = 'success';
          setTimeout(() => {
            this.alertMessage = '';
          }, 10000);
        },
        () => {
          this.alertMessage = 'error';
          setTimeout(() => {
            this.alertMessage = '';
          }, 10000);
        }
      );
    }
  }
}
