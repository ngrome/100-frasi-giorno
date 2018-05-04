import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../../app/models/quote';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class QuoteService {

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('https://talaikis.com/api/quotes/')
      .map(quote => quote.map(q => {
        return {...q, id: Date.now() + Math.random()
      };
    })
      .catch(err => Observable.throw('Ops..qualcosa è andato storto!'))
    );
  }
}
