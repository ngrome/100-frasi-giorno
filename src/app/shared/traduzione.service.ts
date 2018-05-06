import {HttpClient} from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class TraduzioneService {
  // tslint:disable-next-line:max-line-length
  url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180505T143258Z.8ee10ace6eb55e5b.bd4f69083dfeeae75aeff8e3baf2fce5faf39775&text=`;
  sinonimoUrl = `http://thesaurus.altervista.org/thesaurus/v1?word=love&language=en_US&output=json&key=V7yOagBMeQQAyeGx0T1K`;
  constructor(public http: HttpClient) {}

  getTraduzione(desc: string, lang: string) {
    const requestUrl = this.url + desc + '&lang=' + lang;
    return this.http.get(requestUrl).pipe(
      map(x => x),
      catchError(() => throwError('Traduzione con qualche problema?!?'))
    );
  }

  getSinonimo() {
    const requestUrl = this.sinonimoUrl;
    return this.http.get(requestUrl).pipe(
      map(res => res)
    );
  }
}
