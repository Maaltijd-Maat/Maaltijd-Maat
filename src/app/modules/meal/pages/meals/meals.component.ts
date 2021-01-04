import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  LOCALE_ID,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMeal } from '@models:/meal.model';
import { MealService } from '@services/meal/meal.service';
import { CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { MealSharedService } from '../../meal.shared.service';
import { differenceInMinutes, startOfDay, startOfHour } from 'date-fns';
import { CustomEventTitleFormatter } from './event.provider';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./meals.component.scss'],
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    }
  ]
})
export class MealsComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  isNewMealModalVisible: boolean = false;
  isLoading: boolean = false;
  meals: IMeal[] = [];

  CalendarView = CalendarView;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;

  constructor(@Inject(LOCALE_ID)
              public locale: string,
              private route: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef,
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

  onNewMeal(): void {
    this.isNewMealModalVisible = true;
  }

  onRefreshMeals(): void {
    this.refreshMeals();
  }

  ngAfterViewInit() {
    this.scrollToCurrentView();
  }

  viewChanged() {
    this.cdr.detectChanges();
    this.scrollToCurrentView();
  }

  private scrollToCurrentView() {
    if (this.view === CalendarView.Week || CalendarView.Day) {
      // each hour is 60px high, so to get the pixels to scroll it's just the amount of minutes since midnight
      const minutesSinceStartOfDay = differenceInMinutes(
        startOfHour(new Date()),
        startOfDay(new Date())
      );
      const headerHeight = this.view === CalendarView.Week ? 60 : 0;
      this.scrollContainer.nativeElement.scrollTop =
        minutesSinceStartOfDay + headerHeight;
    }
  }

  private refreshMeals(): void {
    this.isLoading = true;
    this.mealService.getMeals().subscribe(meals => {
      this.meals = meals;
    }, error => {}, () => {
      this.isLoading = false;
    });
  }
}
