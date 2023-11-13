import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
MatPaginator


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) matSort: MatSort

  constructor(private http: HttpClient) { }
  user: any;
  column = ["id", "name", "email", "phone"];

  posts: any;
  pageColumn = ["id", "title", "body"];

  ngOnInit(): void {


    // table create
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((data: any) => {
        console.log(data);
        this.user = new MatTableDataSource(data);
        this.user.sort = this.matSort
      })

    // table pagination

    this.http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((data: any) => {
        console.log(data);
        this.posts = new MatTableDataSource(data);
        this.posts.paginator = this.paginator;

      })
  }

filter(e:any){
  this.user.filter = e.target.value;
}

}
