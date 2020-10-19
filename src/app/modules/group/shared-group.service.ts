import { EventEmitter, Injectable } from '@angular/core';

/**
 * This service creates a bridge between the parent and children components.
 * The parent class can listen for the public emitted variables and the children can
 * notify the parent class through the emit methods
 */
@Injectable()
export class SharedGroupService {
  private emitCreateGroup = new EventEmitter<string>();
  private emitDeleteGroup = new EventEmitter<string>();
  private emitUpdateGroup = new EventEmitter<string>();

  /** Observable properties for parent component */
  createGroupEmitted$ = this.emitCreateGroup.asObservable();
  updateGroupEmitted$ = this.emitUpdateGroup.asObservable();
  deleteGroupEmitted$ = this.emitDeleteGroup.asObservable();

  /**
   * Let the observer know that there's a newly created group.
   * @param id - id of the newly created group.
   */
  emitCreate(id: string) {
    this.emitCreateGroup.next(id);
  }

  /**
   * Let the observer know that there's a newly updated group.
   * @param id - id of the newly updated group.
   */
  emitUpdate(id: string) {
    this.emitUpdateGroup.next(id);
  }

  /**
   * Let the observer know that there's a newly deleted group.
   * @param id - id of the newly deleted group
   */
  emitDelete(id: string) {
    this.emitDeleteGroup.next(id);
  }
}
