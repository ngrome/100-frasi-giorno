import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuoteService } from '../../shared/quotes.service';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes: Quote[];

  constructor(private service: QuoteService) { }

  ngOnInit() {
    this.service.getQuotes()
      .subscribe(quotes => this.quotes = quotes);
  }

}
