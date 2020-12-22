import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMeal } from '@models:/meal.model';
import { MealService } from '@services/meal/meal.service';
import { NzCalendarMode } from 'ng-zorro-antd';
import { MealSharedService } from '../../meal.shared.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent {
  public isNewMealModalVisible: boolean = false;
  protected meals!: IMeal[];

  date = new Date();
  mode: NzCalendarMode = 'month';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private mealService: MealService,
              private mealSharedService: MealSharedService) {
    // Retrieve list of meals from the meals resolver
    this.route.data.subscribe((data) => {
      this.meals = data.meals;
    });

    this.mealSharedService.createMealEmitted$.subscribe(() => this.refreshMeals());
    this.mealSharedService.updateMealEmitted$.subscribe(() => this.refreshMeals());
    this.mealSharedService.deleteMealEmitted$.subscribe(() => this.refreshMeals());
  }

  public onNewMeal(): void {
    this.isNewMealModalVisible = true;
  }

  public onRefreshMeals(): void {
    this.refreshMeals();
  }

  private refreshMeals(): void {
    this.mealService.getMeals().subscribe(meals => {
      this.meals = meals;
    });
  }
}