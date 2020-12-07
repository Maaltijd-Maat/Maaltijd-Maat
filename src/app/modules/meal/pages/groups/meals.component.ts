import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGroup } from '@models:/Group';
import { IMeal } from '@models:/meal.model';
import { GroupService } from '@services/group/group.service';
import { MealService } from '@services/meal/meal.service';
import { NzCalendarMode } from 'ng-zorro-antd';

@Component({
  selector: 'app-group',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent {
  protected meals!: IMeal[];

  date = new Date();
  mode: NzCalendarMode = 'month';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private mealService: MealService) {
    // Retrieve list of meals from the meals resolver
    this.route.data.subscribe((data) => {
      this.meals = data.groups;
    });
  }

}
