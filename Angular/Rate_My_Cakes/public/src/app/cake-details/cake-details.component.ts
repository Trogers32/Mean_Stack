import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {
  @Input() currCake: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
