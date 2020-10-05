import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

import { IDish } from '@models:/dish';
import { IIngredient } from '@models:/ingredient';
import { DishService } from '@services/dish/dish.service';

export class EditDish implements IDish {
  public readonly id: string;
  public name: string;
  public amountOfPeople: number;
  public ingredients: IIngredient[];
  public instructions: string[];

  constructor(id: string, name: string, amountOfPeople: number, ingredients: IIngredient[], instructions: string[]) {
    this.id = id;
    this.name = name;
    this.amountOfPeople = amountOfPeople;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.scss']
})
export class EditDishComponent implements OnInit {
  formGroup!: FormGroup;
  id: string = ''

  dish?: EditDish;

  constructor(private fb: FormBuilder, private dishService: DishService,
              private route: ActivatedRoute, private _location: Location,
              private message: NzMessageService) {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      amountOfPeople: [4, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.retrieveDish();
  }

  submitForm(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      const dish: IDish = {
        name: this.formGroup.controls['name'].value,
        ingredients: [],
        instructions: [],
        amountOfPeople: this.formGroup.controls['amountOfPeople'].value
      };

      this.dishService.putDish(this.id, dish).subscribe(() => {
        this.message.create('success', `Successfully updated ${dish.name}!`);
        this._location.back();
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

  private deleteDish(): void {
    this.dishService.deleteDish(this.id);
  }

  // TODO: Ben niet heel gelukkig met deze methode, ik ga hem later herzien.
  private retrieveDish(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id != null) {
        this.dishService.getDish(id).subscribe(dish => {
          this.id = dish.id!;
          this.formGroup.setValue({
            name: dish.name,
            amountOfPeople: dish.amountOfPeople
          });
        }, error => {
          // TODO: Add convenient error handling.
        });
      }
      // TODO: Add convenient error handling.
    });
  }
}
