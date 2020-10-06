import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

import { IDish } from '@models:/dish';
import { DishService } from '@services/dish/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  checked = false;
  dishes$?: Observable<IDish[]>;

  currentPageDishes: IDish[] = [];
  checkedIds = new Set<string>();

  loading: boolean = false;

  constructor(private dishService: DishService) {
  }

  ngOnInit(): void {
    this.getDishes();
  }

  /**
   * Refresh dishes inside table.
   */
  refreshDishes(): void {
    this.getDishes();
  }

  /**
   * Private method that retrieves dishes from the API and assigns those to dishes.
   * Unless there's an error or timeout, then it will show an error message.
   */
  private getDishes(): void {
    this.loading = true;
    this.dishes$ = this.dishService.getDishes()
      .pipe(
        // TODO: Add convenient error handling upon timeout or other errors returned by API.
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.loading = false),
      )
  }
}
