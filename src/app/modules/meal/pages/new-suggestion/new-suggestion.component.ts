import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Dish, IDish} from "@models:/dish";
import {DishService} from "@services/dish/dish.service";
import {MealService} from "@services/meal/meal.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {ISuggestion} from "@models:/suggestion";
import {User} from "@models:/user";
import {ActivatedRoute} from "@angular/router";
import {IMeal} from "@models:/meal.model";

@Component({
  selector: 'app-new-suggestion',
  templateUrl: './new-suggestion.component.html',
  styleUrls: ['./new-suggestion.component.scss']
})
export class NewSuggestionComponent implements OnInit{
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  isLoading: boolean = false;
  formGroup!: FormGroup;

  dishes: IDish[] = [];

  meal!: IMeal;

  constructor(private fb: FormBuilder,
              private dishService: DishService,
              private mealService: MealService,
              private message: NzMessageService,
              private route: ActivatedRoute) {
    this.formGroup = this.fb.group({
      title: [""],
      dish: [null],
      description: [""]
    });
    this.route.data.subscribe((data) => {
      this.meal = data.meal;
    });
  }

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  closeModal(): void {
    this.isVisibleChange.next(false);
  }

  createSuggestion() {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid){
      this.isLoading = true;

      const suggestion: ISuggestion = {
        title: this.formGroup.controls['title'].value,
        dish: new Dish(this.formGroup.controls['dish'].value, 0, [], [], ""),
        suggester: undefined,
        description: this.formGroup.controls['description'].value
      };

      this.mealService.suggestDish(this.meal, suggestion).subscribe((suggestion: ISuggestion) => {
        this.message.create('Success', 'Successfully created a new suggestion for this meal!');
        this.isLoading = false;
        this.closeModal();
      }, error => {
        this.isLoading = false;
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }
}
