import { AuthState } from './../../../../../auth/src/lib/+state/auth.reducer';
import { Component, OnInit } from '@angular/core';
import { Product } from '@assignments/data-models';
import { LoadProducts } from './../../+state/products.actions';
import { Router, NavigationExtras } from '@angular/router';
import { ProductsState } from './../../+state/products.reducer';
import { Store, select } from '@ngrx/store';
import { getProducts } from './../../+state';
import { Observable } from 'rxjs';
import { getUser,getAuthState} from '../../../../../auth/src/lib/+state';
@Component({
  selector: 'assignments-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  getState: Observable<any>;
  isAuthenticated =  false;
  user = null;
  errorMessage = null;

  constructor(private router: Router,
    private store: Store<ProductsState>,
    private authStore: Store<AuthState>) { 
      this.getState = this.authStore.select(getAuthState);
    }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(getProducts));
   
    this.getState.subscribe((state) => {
       console.log(state);
       if(state.user !== null){
        this.isAuthenticated = true;
        this.user = state.user;
        console.log( this.isAuthenticated);
       }
    });
  }

  onFilter(category: string) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      queryParams: {category}
    };
    this.router.navigate([`/products`], navigationExtras);
  }

 public getClasses(name:string){
   console.log(name);
    return name;
  }
}
