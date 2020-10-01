import { Component, OnInit } from '@angular/core';
import { IDish } from '../../models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  checked = false;
  dishes: IDish[] = [];

  currentPageDishes: IDish[] = [];
  checkedIds = new Set<string>();

  isLoading: boolean = false;

  constructor(private dishService: DishService) {
  }

  ngOnInit(): void {
    this.getDishes();
  }

  refreshDishes() {
    this.getDishes();
  }

  private getDishes() {
    this.isLoading = true;
    this.dishService.getDishes().subscribe((data: IDish[]) => {
      this.dishes = data;
      this.isLoading = false;
    });
  }
}
