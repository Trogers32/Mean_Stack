import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
      this.getProducts();
  }
  getProducts(){
    return this._http.get('/products');
  }
  getIProduct(id: string){
    console.log(id)
    return this._http.get(`/products/${id}`);
  }
  editProduct(Product){
    return this._http.put(`/products/${Product._id}`, Product);
  }
  addProduct(newProduct){
    console.log(newProduct)
    return this._http.post('/products', newProduct)
  }
  removeC(id: string){
    console.log(`/remove/${id}`)
    return this._http.delete(`/remove/${id}`)
  }
}