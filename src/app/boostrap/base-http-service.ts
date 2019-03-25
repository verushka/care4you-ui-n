/**
 * @author alain quinones
 */
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export abstract class BaseHttpService<T, D> extends HttpClient {

  private _fullPath(): string {
    return environment.host + this.path();
  }

  protected abstract path(): string;

  public doFindAll(): Observable<T[]> {
    return this.get(this._fullPath()) as Observable<T[]>;
  }

  public doFindById(id: string): Observable<T[]> {
    return this.get(this._fullPath() + '/' + id) as Observable<T[]>;
  }

  public doInsert(body: D): Observable<T> {
    return this.post(this._fullPath(), body) as Observable<T>;
  }

  public doUpdate(id: string, body: D): Observable<T> {
    return this.put(this._fullPath() + '/' + id, body) as Observable<T>;
  }

  public doDelete(id: string): Observable<T> {
    return this.delete(this._fullPath() + '/' + id) as Observable<T>;
  }

}
