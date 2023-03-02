import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {

  id!:number;
  pro!:Product;

  constructor(private route : ActivatedRoute, private ps : ProductService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    // Methode 1 :
    /*for (let index = 0; index < this.ps.listProduct.length; index++) {
      if(this.ps.listProduct[index].id== this.id){
        this.pro=this.ps.listProduct[index];
      }  
    }*/
    // Methode 2
    this.pro = this.ps.listProduct[this.id];
  }

  
}
