import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDish } from '@models:/dish';
import { DishService } from '@services/dish/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {
  checked = false;
  dishes!: IDish[];

  currentPageDishes: IDish[] = [];
  checkedIds = new Set<string>();

  loading: boolean = false;

  constructor(private route: ActivatedRoute,
              private dishService: DishService) {
    this.route.data.subscribe((data) => {
      this.dishes = data.dishes;
    });
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
    this.dishService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
      this.loading = false;
    }, () => {
      this.loading = false;
      // TODO: ERROR HANDLING
    })
  }
}
