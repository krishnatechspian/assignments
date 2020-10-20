import { Router } from '@angular/router';
import { getProducts } from './../+state/index';
import { Observable } from 'rxjs';
import { LoadProducts } from './../+state/products.actions';
import { AuthState } from './../../../auth/+state/auth.reducer';
import { ProductsService } from './../services/products/products.service';
import { ProductsState } from './../+state/products.reducer';
import { Store, select } from '@ngrx/store';
import { Product } from './../../../auth/data-models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public headerDetails: any = {
     page: 'Product List'
  };
  products$: Observable<Product[]>;
  headers: any = [];

constructor( private store: Store<ProductsState>,
             private productsService: ProductsService,
             private router: Router,
             private authStore: Store<AuthState>){
                this.headers = ['Header', 'Summary', 'Text', 'Edit'];

}
 ngOnInit(): void {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(getProducts));
  }

  editProduct(product: Product): any{
    this.router.navigate(['/product/edit/' + product.id ]);
  }
}
