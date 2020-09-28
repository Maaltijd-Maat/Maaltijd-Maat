import { Component, OnInit } from '@angular/core';
import { Dish } from '../../models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  dishes: Dish[] = []

  constructor(private dishService: DishService) { }

  ngOnInit(): void {

  }

}
