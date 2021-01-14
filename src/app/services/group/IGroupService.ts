import { IGroup } from '@models:/group.model';
import { Observable } from 'rxjs';

export interface IGroupService {
  /**
   * Create a new group.
   * @param name - name of new group
   */
  createGroup(name: string): Observable<object>;

  /**
   * Get group by specified id.
   * @param id - id of the wanted group
   * @return requested group; 404 if group doesn't exist.
   */
  getGroup(id: string): Observable<IGroup>;

  /**
   * Get all groups that the user is part of.
   * @return the user's groups
   */
  getGroups(): Observable<IGroup[]>;

  /**
   * Update specified group.
   * @param id - group id
   * @param group - the updated group
   */
  putGroup(id: string, group: IGroup): Observable<object>;

  /**
   * Delete specified group.
   * @param id - id of group that needs to be removed
   */
  deleteGroup(id: string): Observable<object>;
}
