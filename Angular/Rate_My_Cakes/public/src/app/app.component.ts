import { Component, OnInit } from '@angular/core';

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
  newComment: any;
  commentForm;
  default = 5;
  constructor(private _httpService: HttpService, private formBuilder: FormBuilder){
    this.commentForm = this.formBuilder.group({
      rate: "", 
      comment: ""
    });
    this.commentForm.controls['rate'].setValue(this.default, {onlySelf: true});
  }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.cakes = [];
    this.newCake = { baker: "", imageURL: "" };
    this.newComment = {rating: "", comment: ""}
  }
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
        console.log("Got our cakes!", data)
        this.cakes = data;
        console.log(this.cakes)
    });
  }
  getIndividualCake(id: string){
    let observable = this._httpService.getICake(id);
    console.log(observable)
    observable.subscribe(data => {
        console.log("Got our cakes!", data)
        this.currCake = data;
    });
  }
  onSubmit(commentData) {
    let observable = this._httpService.addComment(commentData);
    observable.subscribe(data => {
      console.log("Got our cakes!", data)
      this.getCakesFromService();
    });
  }
}