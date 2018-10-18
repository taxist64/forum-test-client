import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../../models/Message.model';

@Injectable()
export class ForumService {

  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3200/message';

  public getMessage() {
    return this.http.get(this.url)
      .pipe(
        catchError(e => throwError(e))
      );
  }

  public createMessage(params): Observable<Message[]> {
    return this.http.put<Message[]>(this.url, params)
      .pipe(
      catchError(e => throwError(e))
    );
  }
}
