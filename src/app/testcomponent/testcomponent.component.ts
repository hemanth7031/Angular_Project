import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  students: any[];



  constructor() {
    this.students = []; // Initialize the students array as an empty arra
   }




  ngOnInit(): void {

    this.students = [
      {
        name: 'ram',
        age: 20,
        address: 'Hyd',

      },
      {
        name: 'ramesh',
        age: 10,
        address: 'vzg',

      },
      {
        name: 'geetha',
        age: 21,
        address: 'vzg',

      },
    ]

    console.log(this.students);

  }



}


