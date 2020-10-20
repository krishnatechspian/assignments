import { LayoutModule } from './../../layout/layout.module';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './+state/products.effects';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { productsReducer, initialState as productsInitialState  } from './+state/products.reducer';

const authRoutes: Routes = [
    { path: 'main', component: ProductsComponent },
    { path: 'list', component: ProductListComponent },
    { path: 'edit/:id', component: ProductAddEditComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authRoutes),
        HttpClientModule,
        LayoutModule,
        ReactiveFormsModule,
        StoreModule.forFeature('products', productsReducer, { initialState: productsInitialState }),
        EffectsModule.forFeature([ProductsEffects]),
    ],
    declarations: [ProductsComponent, ProductListComponent, ProductAddEditComponent],
    providers: [ProductsEffects]
})
export class ProductModule { }
