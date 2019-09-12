import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
      this.getTasks();
  }
  getTasks(){
    //   // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/task');
    //   // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }
  getITask(id: string){
    //   // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/task');
    //   // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    console.log(id)
    return this._http.get(`/tasks/${id}`);
  }
  postToServer(num){
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/tasks', num);  
}
}