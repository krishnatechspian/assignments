import { ProductsService } from './../../services/products/products.service';
import { AuthState } from './../../../../../auth/src/lib/+state/auth.reducer';
import { Component, NgZone, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '@assignments/data-models';
import { LoadProducts } from './../../+state/products.actions';
import { Router } from '@angular/router';
import { ProductsState } from './../../+state/products.reducer';
import { Store, select } from '@ngrx/store';
import { getProducts } from './../../+state';
import { Observable } from 'rxjs';
import { getUser, getAuthState } from '../../../../../auth/src/lib/+state';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'assignments-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  product: any;
  getState: Observable<any>;
  isAuthenticated = false;
  isHeaderSection = false;
  isEditSection = false;
  user = null;
  errorMessage = null;

  constructor(private router: Router,
    // private ngZone: NgZone,
    // private changeDetectionRef: ChangeDetectorRef,
    private store: Store<ProductsState>,
    private productsService: ProductsService,
    private authStore: Store<AuthState>) {
    this.getState = this.authStore.select(getAuthState);
  }

  ngOnInit() {

    /* Logged in user can update add/edit product data.
     For guest user they can able to see products in Html view */
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(getProducts));

    this.getState.subscribe((state) => {
      if (state.user !== null) {
        this.isAuthenticated = true;
        this.user = state.user;
      }
    });
  }

  public editProduct(product: Product) {
    this.product = product;
    this.isEditSection = true;
    this.isHeaderSection = false;
    this.productsService.setData(this.product);
  }

  public getClasses(name: string) {
    return name;
  }

  public gotToAdminSection() {
    this.isHeaderSection = true;
  }


  getDataFromEdit(product: Product) {
    this.products$ = this.store.pipe(select(getProducts));
    this.isEditSection = false;
    this.isHeaderSection = false;
    // this.ngZone.run(() => {
    //   this.changeDetectionRef.markForCheck();
    // });
  }

}
