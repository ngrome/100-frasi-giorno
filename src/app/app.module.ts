import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteComponent } from './components/quote/quote.component';
import { TraduzioneService } from './shared/traduzione.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TraduzioneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
