import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  newProduct;
  errors;
  constructor(private _httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.newProduct = {title: "", price: "", imageURL: ""}
  }
  createProduct() {
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => {
      if(data['errors']){
        this.errors = data['message'].split("Product validation failed: ").join().split(",");
        for(var i = 0; i < this.errors.length; i++){
          if(this.errors[i].includes("Cast")){
            this.errors[i] = "Price must be a number."
          }
          if(this.errors[i].includes("title: A title is required")){
            this.errors[i] = "A title is required."
          }
          if(this.errors[i].includes("price: A price is required")){
            this.errors[i] = "A price is required."
          }
          if(this.errors[i].includes("title: Title must be at least 4 characters long.")){
            this.errors[i] = "The title must be at least 4 characters long."
          }
        }
        console.log(this.errors)
      } else {
        this.errors = null;
        this.router.navigate(['ProductList'])
      }
    });
  }
}
