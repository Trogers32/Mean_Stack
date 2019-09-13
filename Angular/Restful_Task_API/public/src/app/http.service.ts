import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
      this.getTasks();
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getITask(id: string){
    console.log(id)
    return this._http.get(`/tasks/${id}`);
  }
  editTask(task){
    console.log(task, "hello")
    return this._http.put(`/tasks/${task._id}`, task);
  }
  addTask(newtask){
    console.log(newtask)
    return this._http.post('/tasks', newtask)
  }
  removeT(id: string){
    console.log(`/remove/${id}`)
    return this._http.delete(`/remove/${id}`)
  }
}