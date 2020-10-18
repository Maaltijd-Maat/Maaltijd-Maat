import { IGroup } from '@models:/Group';
import { Observable } from 'rxjs';

export interface IGroupService {
  /**
   * Create a new group.
   *
   * @param user - newly create user object.
   */
  createGroup(name: string): Observable<Object>;

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
