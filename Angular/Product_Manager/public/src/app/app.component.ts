import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from './http.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Object;
  currProduct: any;
  newProduct: any;
  errors;
  constructor(private _httpService: HttpService){
  }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.newProduct = { title: "", price: "", imageURL: "" };
  }
  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
        console.log("Got our Products!", data)
        this.products = data;
        console.log(this.products)
    });
  }
  getProduct(id) {
    this.currProduct = id;
  }
  getIndividualProduct(id: string){
    let observable = this._httpService.getIProduct(id);
    observable.subscribe(data => {
        console.log("Got our Products!", data)
        this.currProduct = data;
    });
  }
}