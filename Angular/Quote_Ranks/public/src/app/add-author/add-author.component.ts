import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor;
  errors;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newAuthor = {name: ""};
  }
  createAuthor() {
    let observable = this._httpService.addAuthor(this.newAuthor);
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
