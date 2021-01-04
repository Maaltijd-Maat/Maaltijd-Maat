import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import { IMeal } from '@models:/meal.model';
import { CalendarEventTitleFormatter } from 'angular-calendar';
import { formatDate } from '@angular/common';

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }

  month(meal: IMeal): string {
    return `<b>${formatDate(meal.start, 'shortTime', this.locale)}</b> ${
      meal.title
    }`;
  }

  week(meal: IMeal): string {
    return `<b>${formatDate(meal.start, 'shortTime', this.locale)}</b> ${meal.title}</b>` +
      `<br>${meal.createdBy.firstname}`;
  }

  day(meal: IMeal): string {
    return `<b>${formatDate(meal.start, 'shortTime', this.locale)}</b> ${
      meal.title
    }`;
  }
}
