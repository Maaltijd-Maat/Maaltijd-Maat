import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IGroup } from '@models:/Group';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.scss']
})
export class NewMealComponent {
  @Input()  isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  isLoading: boolean = false;
  formGroup!: FormGroup;

  groups!: IGroup[];

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private _location: Location, private message: NzMessageService) {
    this.route.data.subscribe((data) => {
      this.groups = data.groups;
    });

    this.formGroup = this.fb.group({
      date: [null, [Validators.required]]
    });
  }

  /**
   * Creates a new meal
   */
  createMeal(): void {

  }

  closeModal(): void {
    this.isVisibleChange.next(false);
  }
}
