import { AuthService } from './../../../auth/service/auth.service';
import { LoginSuccess } from './../../../auth/+state/auth.actions';
import { User } from './../../../auth/data-models/user.d';
import { getUser } from './../../../auth/+state/index';

import { LoadMain } from './../+state/main/main.actions';
import { LoadServices } from './../+state/services/services.actions';
import { Service } from './../../../auth/data-models/service.d';
import { Details } from './../../../auth/data-models/details.d';
import { Router } from '@angular/router';
import { getProducts } from './../+state/index';
import { getHeaderButtons } from './../+state/headers-button/index';
import { getImages } from './../+state/images/index';
import { getDetails } from './../+state/details/index';
import { getMain } from './../+state/main/index';
import { getService } from './../+state/services/index';
import { getAuthState } from '../../../auth/+state/index';

import { Observable } from 'rxjs';
import { LoadProducts } from './../+state/products.actions';
import { LoadImages } from './../+state/images/images.actions';
import { LoadDetails } from './../+state/details/details.actions';
import { LoadHeadersButtons } from './../+state/headers-button/headers-button.actions';
import { AuthState } from './../../../auth/+state/auth.reducer';
import { ProductsService } from './../services/products/products.service';
import { ProductsState } from './../+state/products.reducer';
import { HeadersButtonState } from './../+state/headers-button/headers-button.reducer';
import { ImagesState } from './../+state/images/images.reducer';
import { MainState } from './../+state/main/main.reducer';
import { DetailsState } from './../+state/details/details.reducer';
import { ServiceData, ServiceState } from './../+state/services/services.reducer';
import { Store, select } from '@ngrx/store';
import { HeaderButtons, Product } from './../../../auth/data-models';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from 'src/app/auth/data-models/image';
import { Main } from 'src/app/auth/data-models/main';
@Component({
    selector: 'app-product-main',
    templateUrl: './main-layout-2.component.html',
    styleUrls: ['./main-layout-2.component.scss']
})
export class Product2Component implements OnInit {
    public headerDetails: any = {
        page: 'Product List'
    };
    products$: Observable<Product[]>;
    images$: Observable<Image[]>;
    details$: Observable<Details[]>;
    main$: Observable<Main[]>;
    service$: Observable<Service[]>;
    headerButtons$: Observable<HeaderButtons[]>;
    getState: Observable<any>;
    user$: Observable<User>;
    isAuthenticated = false;

    constructor(private store: Store<ProductsState>,
                private storeHeaderButton: Store<HeadersButtonState>,
                private storeImages: Store<ImagesState>,
                private storeDetails: Store<DetailsState>,
                private storeMain: Store<MainState>,
                private storeService: Store<ServiceState>,
                private authStore: Store<AuthState>,
                private authService: AuthService
    ) {
        this.user$ = this.authStore.select(getUser);
        this.isAuthenticated = this.authService.checkAuthentication();
    }
    ngOnInit(): void {

        this.storeHeaderButton.dispatch(new LoadHeadersButtons());
        this.headerButtons$ = this.storeHeaderButton.pipe(select(getHeaderButtons));

        this.storeImages.dispatch(new LoadImages());
        this.images$ = this.storeImages.pipe(select(getImages));

        this.storeDetails.dispatch(new LoadDetails());
        this.details$ = this.storeDetails.pipe(select(getDetails));

        this.storeMain.dispatch(new LoadMain());
        this.main$ = this.storeMain.pipe(select(getMain));

        this.storeService.dispatch(new LoadServices());
        this.service$ = this.storeService.pipe(select(getService));

    }
}
