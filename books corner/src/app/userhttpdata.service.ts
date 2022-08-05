import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { userinterface } from './user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserHttpdataService {
  // users: any;
  constructor(private _http: HttpClient) {}
  private _url = 'http://localhost:3000/books/';

  getfetchdata(): Observable<userinterface[]> {
    return this._http
      .get<userinterface[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }

  deletedata(id) {
    console.log(id);
    const queUrl = this._url + id;
    console.log(queUrl);
    // const params = { id: empid };
    return this._http.delete<userinterface>(queUrl);
    // .pipe(map((user) => user));
  }

  posthttpdata(bookobj: string): Observable<userinterface> {
    // const postUrl = this._url + userobj;
    // return this._http.post<userinterface[]>(postUrl);
    return this._http.post<userinterface>(this._url, bookobj);
  }

  putupdateddata(updatebook, id) {
    const putUrl = this._url + id;
    return this._http.put<userinterface>(putUrl, updatebook);
  }
}
