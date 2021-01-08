import { EventEmitter, Injectable } from '@angular/core';

/**
 * This service creates a bridge between the parent and children components.
 * The parent class can listen for the public emitted variables and the children can
 * notify the parent class through the emit methods
 */
@Injectable()
export class MealSharedService {
  private emitCreateMeal = new EventEmitter<string>();
  private emitUpdateMeal = new EventEmitter<string>();
  private emitDeleteMeal = new EventEmitter<string>();

  /** Observable properties for parent component */
  createMealEmitted$ = this.emitCreateMeal.asObservable();
  updateMealEmitted$ = this.emitUpdateMeal.asObservable();
  deleteMealEmitted$ = this.emitDeleteMeal.asObservable();

  /**
   * Let the observer know that there's a newly created meal.
   * @param id - id of the newly created group.
   */
  emitCreate(id: string) {
    this.emitCreateMeal.next(id);
  }

  /**
   * Let the observer know that there's a newly updated meal.
   * @param id - id of the newly updated group.
   */
  emitUpdate(id: string) {
    this.emitUpdateMeal.next(id);
  }

  /**
   * Let the observer know that there's a newly deleted meal.
   * @param id - id of the newly deleted group
   */
  emitDelete(id: string) {
    this.emitDeleteMeal.next(id);
  }
}
