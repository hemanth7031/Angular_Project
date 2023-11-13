import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  productCard: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://fakestoreapi.com/products/category/electronics')
    .subscribe((data)=>{
      console.log(data)
      this.productCard = data;
    })
  }

}
