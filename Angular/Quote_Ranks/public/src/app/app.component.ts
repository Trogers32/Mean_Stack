import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from './http.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Authors: Object;
  currAuthor: any;
  newAuthor: any;
  errors;
  show;
  constructor(private _httpService: HttpService){
  }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.newAuthor = { title: "", price: "", imageURL: "" };
    this.show = true;
  }
  getAuthorsFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
        console.log("Got our Authors!", data)
        this.Authors = data;
        console.log(this.Authors)
    });
  }
  getAuthor(id) {
    this.currAuthor = id;
  }
  getIndividualAuthor(id: string){
    let observable = this._httpService.getIAuthor(id);
    observable.subscribe(data => {
        console.log("Got our Authors!", data)
        this.currAuthor = data;
    });
  }
}