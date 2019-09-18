import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  currAuthor;
  getAuthor;
  constructor(private _httpService: HttpService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => this.getAuthor = params );
  }

  ngOnInit() {
    this.currAuthor = {name: ""}
    this.getIndividualAuthor(this.getAuthor.id);
  }
  getIndividualAuthor(id: string){
    let observable = this._httpService.getIAuthor(id);
    observable.subscribe(data => {
        console.log("Got our Authors!", data)
        this.currAuthor = data[0];
    });
  }
  upVote(id: string){
    let observable = this._httpService.upvoteQuote(id);
    observable.subscribe(data => {
        console.log("Upvote sent!", data)
        this.getIndividualAuthor(this.currAuthor._id)
    });
  }
  downVote(id: string){
    let observable = this._httpService.downvoteQuote(id);
    observable.subscribe(data => {
        console.log("Downvote sent!", data)
        this.getIndividualAuthor(this.currAuthor._id)
    });
  }
  removeQuote(id: string){
    let observable = this._httpService.removeQ(this.currAuthor._id, id);
    observable.subscribe(data => {
        console.log("Quote deleted!", data)
        this.getIndividualAuthor(this.currAuthor._id)
    });
  }
}
