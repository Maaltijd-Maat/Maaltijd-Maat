import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IUser, User} from '@models:/user';
import {UserService} from '@services/user/user.service';

@Component({
  selector: 'app-allergies-component',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.scss']
})
export class AllergiesComponent implements OnInit {
  allergiesForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  user!:IUser;
  alertMessage?: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
    this.route.data.subscribe((data) => {
      this.user = data.user;
    });
  }

  ngOnInit(): void {
    this.allergiesForm = this.fb.group({});
    for(let i = 0; i < this.user.allergies.length; i++){
      this.addField();
    }
    this.addField();
  }

  /**
   * Add new form input line.
   * @param e MouseEvent
   */
  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;
    const control = {
      id,
      controlInstance: `allergies${id}`
    };

    const index = this.listOfControl.push(control);
    let name = null;
    if(this.user.allergies != null) name = this.user.allergies[index -1];
    this.allergiesForm.addControl(this.listOfControl[index - 1].controlInstance, new FormControl(name, null));
  }

  /**
   * Remove form input line.
   */
  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      this.allergiesForm.removeControl(i.controlInstance);
    }
  }

  /**
   * Submit allergies form.
   */
  submitForm(): void {
    let allergies: string[] = [];
    for (const i in this.allergiesForm.controls) {
      this.allergiesForm.controls[i].markAsDirty();
      this.allergiesForm.controls[i].updateValueAndValidity();
      if (this.allergiesForm.controls[i].value == null) continue;
      allergies.push(this.allergiesForm.controls[i].value)
    }

    const user = new User(
      '',
      '',
      '',
      '',
      '',
      false,
      '',
      allergies
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
