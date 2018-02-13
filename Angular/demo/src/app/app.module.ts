import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

import { HighlightDirective } from './highlight.directive';

import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
