import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../models/quote';

import { TraduzioneService } from '../../shared/traduzione.service';
import {Traduci} from '../../shared/traduzione.decorators';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input()
  quote: Quote;

  constructor(private traduzione: TraduzioneService) {
  }

  @Traduci('en-zh', 'quote', 'quote')
  ngOnInit() {
    this.quote.author = 'Lorenzo';
  }

  getQuote() {
    return this.quote.quote;
  }

}
