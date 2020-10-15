import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@assignments/data-models';

@Component({
  selector: 'assignments-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() edit = new EventEmitter<Product>();


  editProduct(product:Product){
    this.edit.emit(product);
  }

  ngOnInit() {
    // console.log(this.products);
  }
}
