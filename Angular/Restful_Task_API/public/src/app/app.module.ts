import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './http.service'; //////import service here
import { HttpClientModule } from '@angular/common/http'; ////allows http requests

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  ////allows http requests
  ],
  providers: [HttpService], /////add service here
  bootstrap: [AppComponent]
})
export class AppModule { }
