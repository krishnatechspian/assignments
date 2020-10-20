import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Product } from './../../../auth/data-models';
import { UpdateProductsSuccess } from './../+state/products.actions';
import { ProductsService } from './../services/products/products.service';
import { ProductsState } from './../+state/products.reducer';
import { getProducts } from './../+state/index';

import { LoadProducts } from './../+state/products.actions';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {
  public headerDetails: any = {
    page: 'Product Edit'
  };
  public data: any = {};
  // public editData: any = {};
  updateForm: any = {};
  routeId;
  products$: Observable<Product[]>;
  editProductForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required])
  });

  constructor(private store: Store<ProductsState>,
              private productService: ProductsService,
              private route: ActivatedRoute) {

    this.routeId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadProducts());
    this.products$ = this.store.pipe(select(getProducts));
    this.products$.subscribe(
      (data) => {
        const index = _.findIndex(data, { id: + this.routeId });
        if (index !== -1) {
          this.patchForm(data[index]);
        }
      }
    );
  }

  // tslint:disable-next-line: typedef
  patchForm(data: any) {
    this.editProductForm.patchValue({
      text: data.text,
      summary: data.summary
    });
  }

  updateProduct(): void {
    this.updateForm = {
      text: this.editProductForm.value.text,
      summary: this.editProductForm.value.summary,
      class: this.data.class,
      maintext: this.data.maintext,
      'section-class': this.data['section-class'],
      id: this.data.id
    };
    const update: Update<Product> = this.updateForm;
    this.store.dispatch(new UpdateProductsSuccess(update));
  }

}
