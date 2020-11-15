import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { IDish } from '@models:/dish';
import { DishService } from '@services/dish/dish.service';

@Component({
  selector: 'app-new-dish',
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
      const dish: IDish = {
        name: this.formGroup.controls['name'].value,
        author: null,
        ingredients: [],
        instructions: [],
        amountOfPeople: this.formGroup.controls['amountOfPeople'].value
      };

      this.dishService.postDish(dish).subscribe(() => {
        this.message.create('success', `Successfully added ${dish.name}!`)
        this._location.back();
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }
}
