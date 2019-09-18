import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  currAuthor;
  getAuthor;
  newQuote;
  errors;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.getAuthor = params );
  }

  ngOnInit() {
    this.currAuthor = {name: ""}
    this.newQuote = {content: ""}
    this.getIndividualAuthor(this.getAuthor.id);
  }
  getIndividualAuthor(id: string){
    let observable = this._httpService.getIAuthor(id);
    observable.subscribe(data => {
        console.log("Got our Authors!", data)
        this.currAuthor = data[0];
        this.newQuote._id = this.currAuthor._id;
    });
  }
  createQuote() {
    let observable = this._httpService.editAuthor(this.newQuote);
    observable.subscribe(data => {
      console.log(data)
      if(data['errors']){
        this.errors = data['message'].split(",");
        for(var i = 0; i < this.errors.length; i++){
          if(this.errors[i].includes("content: A quote is required")){
            this.errors[i] = "A quote is required."
          }
          if(this.errors[i].includes("Quotes must be at least 3 characters long")){
            this.errors[i] = "Quotes must be at least 3 characters long."
          }
        }
        console.log(this.errors)
      } else {
        this.errors = null;
        this.router.navigate(['AuthorQuotes/', this.currAuthor._id])
      }
    });
  }

}
