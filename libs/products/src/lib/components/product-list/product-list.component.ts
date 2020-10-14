import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@assignments/data-models';

@Component({
  selector: 'assignments-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[];
  @Output() filter = new EventEmitter<string>();

  onFilter(category: string) {
    this.filter.emit(category);
  }
}
