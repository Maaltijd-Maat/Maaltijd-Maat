import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IUser, UserModel} from '@models:/user.model';
import {UserService} from '@services/user/user.service';

@Component({
  selector: 'app-diets-component',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss']
})
export class DietsComponent implements OnInit {
  dietsForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  user!: IUser;
  alertMessage?: string;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService) {
    this.route.data.subscribe((data) => {
      this.user = data.user;
    });
  }

  ngOnInit(): void {
    this.dietsForm = this.fb.group({});
    //Create enough fields for all personal diets.
    if (this.user.diets != null) {
      for (let i = 0; i < this.user.diets.length; i++) {
        //this.dietsForm.setValue('d');
        this.addField();
      }
    }
    //Add extra empty field
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
      controlInstance: `diets${id}`
    };
    const index = this.listOfControl.push(control);
    let name = null;
    if(this.user.diets != null) name = this.user.diets[index -1];
    this.dietsForm.addControl(this.listOfControl[index - 1].controlInstance, new FormControl(name, null));
  }

  /**
   * Remove form input line.
   */
  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      this.dietsForm.removeControl(i.controlInstance);
    }
  }

  /**
   * Submit diets form.
   */
  submitForm(): void {
    let diets: string[] = [];
    for (const i in this.dietsForm.controls) {
      this.dietsForm.controls[i].markAsDirty();
      this.dietsForm.controls[i].updateValueAndValidity();
      if (this.dietsForm.controls[i].value == null) continue;
      diets.push(this.dietsForm.controls[i].value)
    }

    const user = new UserModel(
      '',
      '',
      '',
      '',
      '',
      false,
      '',
      [],
      diets
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
