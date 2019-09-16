import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './http.service'; //////import service here
import { HttpClientModule } from '@angular/common/http'; ////allows http requests
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CakeDetailsComponent } from './cake-details/cake-details.component'; // <-- import FormsModule.

@NgModule({
  declarations: [
    AppComponent,
    CakeDetailsComponent
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
