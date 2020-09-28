import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DishService } from '../../services/dish.service';
import { Dish } from '../../models/dish';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private dishService: DishService) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      amountOfPeople: [4, [Validators.required]],
      instructions: [null]
    });
  }

  submitForm(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      const dish = new Dish(this.formGroup.controls['name'].value, new User(),
        this.formGroup.controls['instructions'].value, [],
        this.formGroup.controls['amountOfPeople'].value);

      this.dishService.postDish(dish);
    }
  }

}
