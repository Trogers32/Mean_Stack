import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './http.service'; //////import service here
import { HttpClientModule } from '@angular/common/http'; ////allows http requests
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- import FormsModule.

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService], /////add service here
  bootstrap: [AppComponent]
})
export class AppModule { }
