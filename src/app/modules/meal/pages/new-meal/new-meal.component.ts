import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGroup } from '@models:/Group';
import { IMeal, ICreateMeal } from '@models:/meal.model';
import { GroupService } from '@services/group/group.service';
import { MealService } from '@services/meal/meal.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MealSharedService } from '../../meal.shared.service';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.scss']
})
export class NewMealComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  isLoading: boolean = false;
  formGroup!: FormGroup;

  groups: IGroup[] = [];

  constructor(private fb: FormBuilder, private groupService: GroupService,
              private mealService: MealService, private message: NzMessageService,
              private sharedMealService: MealSharedService) {
    this.formGroup = this.fb.group({
      title: ["", [Validators.required]],
      group: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      description: [""]
    });
  }

  public ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => {
      this.groups = groups;
    });
  }

  /**
   * Creates a new meal
   */
  createMeal(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }

    if (this.formGroup.valid) {
      this.isLoading = true;
      const postMeal: ICreateMeal = {
        title: this.formGroup.controls['title'].value,
        groupId: this.formGroup.controls['group'].value,
        start: this.formGroup.controls['startDate'].value,
        end: this.formGroup.controls['endDate'].value,
        description: this.formGroup.controls['description'].value
      };

      this.mealService.createMeal(postMeal).subscribe((meal: IMeal) => {
        this.message.create('success', `Successfully created a new meal for ${meal.startDate}!`);
        this.sharedMealService.emitCreate(meal.id)!;
        this.isLoading = false;
        this.closeModal();
      }, error => {
        this.isLoading = false;
        // TODO: Add convenient way to present errors at the frontend.
      });
    }
  }

  closeModal(): void {
    this.isVisibleChange.next(false);
  }
}
