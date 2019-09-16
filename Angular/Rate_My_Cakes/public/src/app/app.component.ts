import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from './http.service';
import { NgModel } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes: Object;
  currCake: any;
  newCake: any;
  commentForm;
  default = 5;
  errors;
  constructor(private _httpService: HttpService, private formBuilder: FormBuilder){
    this.commentForm = this.formBuilder.group({
      _id: "",
      rate: "", 
      comment: ""
    });
    this.commentForm.controls['rate'].setValue(this.default, {onlySelf: true});
  }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.cakes = [];
    this.newCake = { baker: "", imageURL: "" };
  }
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
        console.log("Got our cakes!", data)
        this.cakes = data;
        console.log(this.cakes)
    });
  }
  onSubmit(commentData, cake) {
    console.log(cake)
    commentData._id = cake;
    let observable = this._httpService.addComment(commentData);
    observable.subscribe(data => {
      console.log("Got our cakes!", data)
      this.commentForm.reset();
      this.commentForm.controls['rate'].setValue(this.default, {onlySelf: true});
      this.getCakesFromService();
    });
  }
  createCake() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Got our cakes!", data)
      if(data['errors']){
        this.errors = data['message'].split(",");
        console.log(this.errors)
      } else {
        this.errors = null;
      }
      this.getCakesFromService();
    });
  }
  getCake(id) {
    this.currCake = id;
  }
  getIndividualCake(id: string){
    let observable = this._httpService.getICake(id);
    observable.subscribe(data => {
        console.log("Got our cakes!", data)
        this.currCake = data;
    });
  }
}