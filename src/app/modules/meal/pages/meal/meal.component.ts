import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';
import {IMeal} from '@models:/meal.model';
import {ActivatedRoute} from '@angular/router';
import decode from 'jwt-decode';
import {AuthenticateService} from '@services/authenticate/authenticate.service';
import {MealService} from '@services/meal/meal.service';
import {IAttendee} from '@models:/Attendee';

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
  attendees!: IAttendee[];

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private message: NzMessageService,
              private authenticateService: AuthenticateService,
              private mealService: MealService
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
      this.attendees = data.attendee;
    });
  }

  public onSetAvailability($event: string): void{
    //Convert string to date object
    this.meal.start = new Date(this.meal.start);
    this.meal.end = new Date(this.meal.end);
    const attendee = {
      status: $event,
      meal: this.meal
    };

    //Update or add new attendee.
    this.mealService.createOrUpdateAttendee(attendee).subscribe(() => {
      this.message.create('Success', 'Successfully');
    }, error => {
      this.message.create('error', `Something went wrong while changing availability: ${error.error}!`);
    });
  }

  public onNewSuggestion(): void {
    this.isNewSuggestionModalVisible = true;
  }
}
