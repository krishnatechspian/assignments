
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderButtons } from 'src/app/auth/data-models';
import { HeadersButtonState } from 'src/app/pages/products/+state/headers-button/headers-button.reducer';
import { select, Store } from '@ngrx/store';
import { LoadHeadersButtons } from 'src/app/pages/products/+state/headers-button/headers-button.actions';
import { getHeaderButtons } from 'src/app/pages/products/+state/headers-button';
import { Details } from 'src/app/auth/data-models/details';
import { DetailsState } from 'src/app/pages/products/+state/details/details.reducer';
import { LoadDetails } from 'src/app/pages/products/+state/details/details.actions';
import { getDetails } from 'src/app/pages/products/+state/details';


@Component({
    selector: 'app-details-1',
    templateUrl: './details-1.component.html'
})
export class Details1Component implements OnInit{
    details$: Observable<Details[]>;
    constructor(  private storeDetails: Store<DetailsState>) { }

    ngOnInit(): void {
        this.storeDetails.dispatch(new LoadDetails());
        this.details$ = this.storeDetails.pipe(select(getDetails));
    }
}
