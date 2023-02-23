import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../core/model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  product!:Product;

  constructor(private ps : ProductService, private route : Router) { }

  ngOnInit(): void {
    this.product = new Product;
  }

  add(){
    this.ps.add(this.product);
    this.route.navigateByUrl('/products');
  }
  

}
