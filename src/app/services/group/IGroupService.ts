import { IGroup } from '@models:/Group';
import { Observable } from 'rxjs';

export interface IGroupService {
  /**
   * Create a new group.
   *
   * @param user - newly create user object.
   */
  createGroup(group: IGroup): void;

  /**
   * TODO
   * @param group
   */
  getGroup(id: string): Observable<IGroup>;

  /**
   * TODO
   */
  getGroups(): Observable<IGroup[]>
}
