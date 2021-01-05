import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';
import {IMeal} from '@models:/meal.model';
import {ActivatedRoute} from '@angular/router';
import decode from 'jwt-decode';
import {AuthenticateService} from '@services/authenticate/authenticate.service';
import {MealService} from '@services/meal/meal.service';
import {IUser, User} from '@models:/user';
import {Attendee, IAttendee} from '@models:/Attendee';
import {UserService} from '@services/user/user.service';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  public isNewSuggestionModalVisible: boolean = false;
  formGroup!: FormGroup;
  meal!: IMeal;
  loggedInUserEmail: string;
  status!: any;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private message: NzMessageService,
              private authenticateService: AuthenticateService,
              private mealService: MealService,
              private userService: UserService
  ) {
    const payload: any = decode(authenticateService.getToken());
    this.loggedInUserEmail = payload.sub;

    // Retrieve meal from the meal resolver
    this.route.data.subscribe((data) => {
      //Format start and end date to proper visual date
      data.meal.start = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      }).format(new Date(data.meal.start));
      data.meal.end = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric', month: 'short', day: 'numeric',
        weekday: 'short', hour: 'numeric', minute: 'numeric'
      }).format(new Date(data.meal.end));
      this.meal = data.meal;
    });
  }

  public onSetAvailability($event: string): void{
    this.meal.start = new Date(this.meal.start);
    this.meal.end = new Date(this.meal.end);
    let attendee: IAttendee = new Attendee($event, this.meal);
    this.mealService.setAttendee(attendee).subscribe((attendee: IAttendee) => {
      if (this.meal.attendees == null) this.meal.attendees = [];
      this.meal.attendees.push(attendee);

      this.mealService.updateMeal(this.meal).subscribe((meal: IMeal) => {
        this.message.create('Success', 'Successfully');
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });


  }

  public onNewSuggestion(): void {
    this.isNewSuggestionModalVisible = true;
  }
}
