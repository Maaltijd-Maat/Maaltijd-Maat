import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DishService} from "../../services/dish.service";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {

  newDish!: FormGroup;

  constructor(private fb: FormBuilder, private dishService: DishService) {
  }

  ngOnInit(): void {
    this.newDish = this.fb.group({
      name: [null, [Validators.required]],
      defaultAmountOfPeople: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.newDish.controls) {
      this.newDish.controls[i].markAsDirty();
      this.newDish.controls[i].updateValueAndValidity();
    }
  }

}
