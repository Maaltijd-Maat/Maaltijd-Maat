import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Dish } from '@models:/dish';
import { User } from '@models:/user';
import { DishService } from '@services/dish/dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.scss']
})
export class NewDishComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private dishService: DishService,
              private _location: Location, private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      amountOfPeople: [4, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      //TODO user id ophalen en deze inserten in de dish
      const user = new User('Wouter', 'Verdegaal', 'wouter.verdegaal@hva.nl', '0000',  'blob', false, [], "5f7af1abe6b1651ca98edbab");
      const dish = new Dish(
        this.formGroup.controls['name'].value,
        user,
        [],
        [],
        this.formGroup.controls['amountOfPeople'].value
      );

      this.dishService.postDish(dish).subscribe(() => {
        this.message.create('success', `Successfully added ${dish.name}!`)
        this._location.back();
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

}
