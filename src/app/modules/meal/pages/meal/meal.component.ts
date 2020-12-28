import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';
import {IMeal} from '@models:/meal.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  formGroup!: FormGroup;
  meal!: IMeal;
  public isNewSuggestionModalVisible: boolean = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private message: NzMessageService) {
    // Retrieve list of meals from the meals resolver
    this.route.data.subscribe((data) => {
      data.meal.startDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }).format(new Date(data.meal.startDate));
      data.meal.endDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }).format(new Date(data.meal.endDate));
      this.meal = data.meal;
    });
  }

  ngOnInit(): void {
    console.log(this.meal);
  }

  public onNewSuggestion(): void {
    this.isNewSuggestionModalVisible = true;
  }
}
