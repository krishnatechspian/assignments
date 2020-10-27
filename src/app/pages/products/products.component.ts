import { LoadProducts } from './+state/products.actions';
import { getAuthState } from './../../auth/+state/index';
import { ProductsState } from './+state/products.reducer';
import { AuthState } from './../../auth/+state/auth.reducer';
import { ProductsService } from './services/products/products.service';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Product } from '../../auth/data-models/product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { getProducts } from './+state';
// import { select } from '@ngrx/core/src/operator/select';
@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
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

  // // tslint:disable-next-line: typedef
  ngOnInit(): void {

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

  public editProduct(product: Product): any  {
    this.product = product;
    this.isEditSection = true;
    this.isHeaderSection = false;
    this.productsService.setData(this.product);
  }

  public getClasses(name: string): any {
    return name;
  }

  public gotToAdminSection(): any {
    this.router.navigate(['/product/list']);
  }


  getDataFromEdit(product: Product): any {
    this.products$ = this.store.pipe(select(getProducts));
    this.isEditSection = false;
    this.isHeaderSection = false;
    // this.ngZone.run(() => {
    //   this.changeDetectionRef.markForCheck();
    // });
  }

  logOut(): any {
    localStorage.clear();
    this.isAuthenticated = false;
  }

}
