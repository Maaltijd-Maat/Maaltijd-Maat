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
  dish?: EditDish;

  public constructor(private fb: FormBuilder, private dishService: DishService,
                     private route: ActivatedRoute, private _location: Location,
                     private message: NzMessageService) {
    // Retrieve dish object from the edit dish resolver
    this.route.data.subscribe((data) => {
      this.dish = data.dish;
    });

    // Fill form group with the dish data
    this.formGroup = this.fb.group({
      name: [this.dish!.name, [Validators.required]],
      amountOfPeople: [this.dish!.amountOfPeople, [Validators.required]]
    });
  }

  public ngOnInit(): void {
  }

  /**
   * Submit form as dish to the API.
   */
  public updateDish(): void {
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

      this.dishService.putDish(this.dish!.id, dish).subscribe(() => {
        this.message.create('success', `Successfully updated ${dish.name}!`);
        this._location.back();
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

  /**
   * Remove retrieved dish from the database.
   */
  public deleteDish(): void {
    this.dishService.deleteDish(this.dish!.id).subscribe(
      () => {
        this.message.create('success', `Successfully deleted ${this.dish!.name}!`);
        this._location.back();
      }, error => {
        // TODO: Add convenient way to present errors at the frontend.
      }
    );
  }
}
