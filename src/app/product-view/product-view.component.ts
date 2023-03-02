import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  @Input() i!:Product;
  @Output() incrementEvent = new EventEmitter<Product>();
  @Output() incrementEventBuy = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    
  }

  sendNotifLike(){
    this.incrementEvent.emit(this.i);
  }

  sendNotifBuy(){
    this.incrementEventBuy.emit(this.i);
  }

}
