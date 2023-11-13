import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {



  data=true; //NgIf content show or Not
  Movies=['RRR','Bemalanayak','Sitaram',]
  constructor() { }

  ngOnInit(): void {
  }

  num=[1,2,3,4,5,6,7,8,9,10]
}
