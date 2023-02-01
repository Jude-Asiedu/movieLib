import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  get(url: string, options?: any): Observable<any> {
    return this.http.get<any>(`${url}`, options).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(err => of([err]))
    );
  }

  post(url: string, postBody: object, options?: any): Observable<any> {
    if (options) {
      return this.http.post<any>(`${url}`, postBody, options).pipe(
        map((res: any) => {
          return res;
        }),
        catchError(err => of([err])),
        tap(() => {
          // this.refreshNeeded.next();
        })
      );
    } else {
      return this.http.post<any>(`${url}`, postBody).pipe(
        map((res: any) => {
          return res;
        }),
        catchError(err => {
          return throwError(err);
        }),
        tap(() => {
          // this.refreshNeeded.next();
        })
      );
    }
  }

  put(url: string, putData: object, options?: any): Observable<any> {
    return this.http.put<any>(`${url}`, putData, options).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(err => of([err]))
    );
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http.delete<any>(`${url}`, options).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(err => of([err]))
    );
  }
}
