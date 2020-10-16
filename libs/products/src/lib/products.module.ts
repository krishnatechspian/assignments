import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsEffects } from './+state/products.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
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
      { path: 'add-edit', component: ProductAddEditComponent },
    ]),
   
    StoreModule.forFeature('products', productsReducer, { initialState: productsInitialState }),
    EffectsModule.forFeature([ProductsEffects]),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsComponent, ProductListComponent, ProductAddEditComponent],
  providers: [ProductsEffects]
})
export class ProductsModule {}
