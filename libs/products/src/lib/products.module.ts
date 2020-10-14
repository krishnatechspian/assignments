import { ProductsEffects } from './+state/products.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../apps/sports/src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { productsReducer, initialState as productsInitialState  } from './+state/products.reducer';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialModule } from '@assignments/material';
import { ProductAddEditComponent } from './components/product-add-edit/product-add-edit.component';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: ProductsComponent },
    ]),

   
    StoreModule.forFeature('products', productsReducer, { initialState: productsInitialState }),
    EffectsModule.forFeature([ProductsEffects]),
    MaterialModule
  ],
  declarations: [ProductsComponent, ProductListComponent, ProductAddEditComponent],
  providers: [ProductsEffects]
})
export class ProductsModule {}
