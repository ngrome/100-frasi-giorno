import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteService } from './shared/quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
