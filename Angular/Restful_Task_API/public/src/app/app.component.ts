import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show:boolean = false;
  tshow:boolean = false;
  tasks: Object;
  currTask: Object;
  edTask: any;
  newTask: any;
  title = 'Coding Dojo';
  constructor(private _httpService: HttpService){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    this.tasks = [];
    this.currTask = [];
    this.newTask = { title: "", description: "" };
  }
  // Set the attribute tasks to be an array.
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
        console.log("Got our tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        this.tasks = data;
        console.log(this.tasks)
    });
  }
  getIndividualTask(id: string){
    let observable = this._httpService.getITask(id);
    console.log(observable)
    observable.subscribe(data => {
        console.log("Got our tasks!", data)
        // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
        // This may be different for you, depending on how you set up your Task API.
        this.currTask = data;
        console.log(this.currTask)
        this.tshow = true;
    });
  }
  removeTask(id: string){
    let observable = this._httpService.removeT(id);
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.getTasksFromService();
    });
  }
  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    });
  }
  toggle(task) {
    this.edTask = {_id: task._id, title: task.title, description: task.description}
    this.tshow = false;
    this.show = true;
  }
  edit(){
    let observable = this._httpService.editTask(this.edTask);
      observable.subscribe(data => {
          console.log("Editing...", data)
          this.getTasksFromService();
      });
    this.show = false;
    // this.edTask = { title: "", description: "" };
  }
}