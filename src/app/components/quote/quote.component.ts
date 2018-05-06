import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { Quote } from '../../models/quote';

import { TraduzioneService } from '../../shared/traduzione.service';
import {Traducimi} from '../../shared/traduzione.decorators';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input()
  @Traducimi('en-it', 'quote')
  quote: Quote;

  constructor(private changeDetector: ChangeDetectorRef, private traduzione: TraduzioneService) {
  }

  ngOnInit() {
    this.quote.author = 'Lorenzo';
  }

  getQuote() {
    return this.quote.quote;
  }

}
