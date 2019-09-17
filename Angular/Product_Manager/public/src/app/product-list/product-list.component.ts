import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  show;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.products = [];
    this.getProductsFromService();
  }
  getProductsFromService(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
        console.log("Got our Products!", data)
        this.products = data;
        console.log(this.products)
    });
  }

}
