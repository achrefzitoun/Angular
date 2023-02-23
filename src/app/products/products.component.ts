import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:String = "welcome";
  listProduct!:Product[];
  constructor(private ps : ProductService) {  }

  ngOnInit(): void {
    this.listProduct=this.ps.listProduct;
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(l : number){
    this.listProduct[l].like++;
  }
  


}
