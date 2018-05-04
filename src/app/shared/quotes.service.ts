import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import {map, catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Quote } from '../../app/models/quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('https://talaikis.com/api/quotes/')
    .pipe(
      map(quote => quote.map(q => {
        return {...q, id: Date.now() + Math.random()
        };
      }),
      catchError( err => throwError('Ops..qualcosa è andato storo!'))
    ));
  }
}
