import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedditFormComponent } from './reddit-form/reddit-form.component';
import { RedditListComponent } from './reddit-list/reddit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditFormComponent,
    RedditListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
