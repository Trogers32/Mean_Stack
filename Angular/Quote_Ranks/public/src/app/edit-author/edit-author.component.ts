import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  currAuthor;
  getAuthor;
  editAuthor;
  errors;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.getAuthor = params );
  }

  ngOnInit() {
    this.currAuthor = {name: ""}
    this.editAuthor = {name: ""}
    this.getIndividualAuthor(this.getAuthor.id);
  }
  getIndividualAuthor(id: string){
    let observable = this._httpService.getIAuthor(id);
    observable.subscribe(data => {
        console.log("Got our Authors!", data)
        this.currAuthor = data[0];
        this.editAuthor = {_id: this.currAuthor._id, name: this.currAuthor.name}
    });
  }
  createAuthor() {
    let observable = this._httpService.actuallyEditAuthor(this.editAuthor);
    observable.subscribe(data => {
      if(data['errors']){
        this.errors = data['message'].split("Author validation failed: ").join().split(",");
        for(var i = 0; i < this.errors.length; i++){
          if(this.errors[i].includes("name: An author name is required")){
            this.errors[i] = "An author name is required."
          }
          if(this.errors[i].includes("Author name must be at least 3 characters long.")){
            this.errors[i] = "Author name must be at least 3 characters long."
          }
        }
        console.log(this.errors)
      } else {
        this.errors = null;
        this.router.navigate(['Home'])
      }
    });
  }


}
