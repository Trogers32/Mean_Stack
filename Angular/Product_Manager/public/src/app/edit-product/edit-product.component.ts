import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProduct;
  currProduct;
  errors;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.editProduct = params );
  }

  ngOnInit() {
    this.currProduct = {title: "", price: "", imageURL: ""}
    this.getIndividualProduct(this.editProduct.id);
  }

  getIndividualProduct(id: string){
    let observable = this._httpService.getIProduct(id);
    observable.subscribe(data => {
        console.log("Got our Products!", data)
        this.currProduct = data[0];
    });
  }
  edit(){
    let observable = this._httpService.editProduct(this.currProduct);
      observable.subscribe(data => {
          console.log("Editing...", data)
          if(data['errors']){
            this.errors = data['message'].split("Validation failed: ").join().split(",");
            for(var i = 0; i < this.errors.length; i++){
              if(this.errors[i].includes("title: A title is required")){
                this.errors[i] = "A title is required."
              }
              if(this.errors[i].includes("itle must be at least 4 ch")){
                this.errors[i] = "A title must be at least 4 characters long."
              }
            }
            console.log(this.errors)
          } else if(data['message']) {
            this.errors = ["Price must be a number."]
          } else {
            this.errors = null;
            this.router.navigate(['ProductList'])
          }
      });
  }
}
