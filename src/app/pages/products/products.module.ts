import { DetailsEffects } from './+state/details/details.effects';
import { ImagesEffects } from './+state/images/images.effects';
import { LayoutModule } from './../../layout/layout.module';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './+state/products.effects';
import { MainEffects } from './+state/main/main.effects';
import { ServicesEffects } from './+state/services/services.effects';
import { HeaderButtonsEffects } from './+state/headers-button/headers-button.effects';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { productsReducer, initialState as productsInitialState  } from './+state/products.reducer';
import { Product2Component } from './main-layout-2/main-layout-2.component';
import { headerButtonsReducer, initialState as headerButtonsInitialState  } from './+state/headers-button/headers-button.reducer';
import { imagesReducer, initialState as imagesReducerInitialState  } from './+state/images/images.reducer';
import { detailsReducer, initialState as detailsInitialState  } from './+state/details/details.reducer';
import { mainReducer, initialState as mainInitialState  } from './+state/main/main.reducer';
import { serviceReducer, initialState as serviceInitialState  } from './+state/services/services.reducer';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PaymentComponent } from './payment/payment.component';
import { SharedModule } from 'src/app/components/component.module';

const authRoutes: Routes = [
    { path: 'main', component: ProductsComponent },
    { path: 'list', component: ProductListComponent },
    { path: 'edit/:id', component: ProductAddEditComponent},
    { path: 'main2', component: Product2Component},
    { path: 'details/:id', component: ProductDetailsComponent},
    { path: 'payment', component: PaymentComponent},

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(authRoutes),
        HttpClientModule,
        LayoutModule,
        ReactiveFormsModule,
        SharedModule,
        StoreModule.forFeature('products', productsReducer, { initialState: productsInitialState }),
        StoreModule.forFeature('headers-button', headerButtonsReducer, { initialState: headerButtonsInitialState }),
        StoreModule.forFeature('images', imagesReducer, { initialState: imagesReducerInitialState }),
        StoreModule.forFeature('details', detailsReducer, { initialState: detailsInitialState }),
        StoreModule.forFeature('main', mainReducer, { initialState: mainInitialState }),
        StoreModule.forFeature('services', serviceReducer, { initialState: serviceInitialState }),
        EffectsModule.forFeature([ProductsEffects, HeaderButtonsEffects, ImagesEffects,
             DetailsEffects, MainEffects, ServicesEffects]),
    ],
    declarations: [ProductsComponent, ProductListComponent, PaymentComponent,
        ProductAddEditComponent, Product2Component, ProductDetailsComponent],
    providers: [ProductsEffects, HeaderButtonsEffects, ImagesEffects, DetailsEffects,
        MainEffects, ServicesEffects]
})
export class ProductModule { }
