import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
      this.getCakes();
  }
  getCakes(){
    return this._http.get('/cakes');
  }
  getICake(id: string){
    console.log(id)
    return this._http.get(`/cakes/${id}`);
  }
  // editCake(cake){
  //   return this._http.put(`/cakes/${cake._id}`, cake);
  // }
  addCake(newcake){
    console.log(newcake)
    return this._http.post('/cakes', newcake)
  }
  addComment(newComm){
    console.log("Add Comment", newComm)
    return this._http.post(`/cakes/${newComm._id}`, newComm) //////use session comment variable
  }
  removeC(id: string){
    console.log(`/remove/${id}`)
    return this._http.delete(`/remove/${id}`)
  }
}