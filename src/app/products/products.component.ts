import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
import { MethodesService } from '../services/methodes.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:String = "welcome";
  listProduct!:Product[];
  i!:number;
  constructor(private ps : ProductService, private ms : MethodesService) {  }

  ngOnInit(): void {
    this.listProduct=this.ps.listProduct;
  }

  buy(product : Product){
    let p = this.listProduct.indexOf(product);
    this.listProduct[p].quantity--;
  }

  like(product : Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].like++;
  }

  calcul(){
    this.i=this.ms.getNumberof(this.listProduct, "quantity", 0)
  }

}
