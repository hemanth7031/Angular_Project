import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
  ngOnInit(): void {
  }
 
}
