import { AuthService } from './../../../auth/service/auth.service';
import { LoginSuccess } from './../../../auth/+state/auth.actions';
import { User } from './../../../auth/data-models/user.d';
import { getUser } from './../../../auth/+state/index';

import { LoadMain } from './../+state/main/main.actions';
import { LoadServices } from './../+state/services/services.actions';
import { Service } from './../../../auth/data-models/service.d';
import { Details } from '../../../auth/data-models/details';
import { ActivatedRoute, Router } from '@angular/router';
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
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit  {
    service$: Observable<Service[]>;
    service: any = [];
    serviceId: number;
    constructor(private storeService: Store<ServiceState>,
                private route: ActivatedRoute){
                    // tslint:disable-next-line: no-unused-expression
                this.serviceId =  this.route.snapshot.params.id;
    }

    ngOnInit(): void {
        this.storeService.dispatch(new LoadServices());
        this.storeService.pipe(select(getService)).subscribe(
            (data) => {
                console.log(data);
                this.service = data.filter( service => service.id === (+this.serviceId));
                console.log(this.service);
            }
        );
     }
}
