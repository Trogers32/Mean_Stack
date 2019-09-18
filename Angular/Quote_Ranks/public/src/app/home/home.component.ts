import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.authors = [];
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
        console.log("Got our Authors!", data)
        this.authors = data;
        console.log(this.authors)
    });
  }
}
