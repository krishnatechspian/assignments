import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from './../../services/products/products.service';
import { ProductsActions, UpdateProductsSuccess } from './../../+state/products.actions';
import { ProductsState } from './../../+state/products.reducer';
import { Store } from '@ngrx/store';
import { Product } from './../../../../../data-models/product.d';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'assignments-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {
  @Output() editProduct = new EventEmitter<Product>();
  public data: any = {};
  updateForm: any = {};

  editProductForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required])
  });

  constructor(private store: Store<ProductsState>,
    private productService: ProductsService) {

    this.productService.getData().subscribe(
      (data: any) => {
        this.data = data;
        this.editProductForm.patchValue({
          text : this.data.text,
          summary:  this.data.summary
        })
      }
    )
  }

  ngOnInit(): void { }

  updateProduct() {
    this.updateForm = {
      "text": this.editProductForm.value.text,
      "summary": this.editProductForm.value.summary,
      "class": this.data.class,
      "maintext": this.data.maintext,
      "section-class": this.data['section-class'],
      "id": this.data.id
    }
    const update: Update<Product> = this.updateForm;
    this.store.dispatch(new UpdateProductsSuccess(update));
    // Haver to remove time out
    // setTimeout(() => {
      this.editProduct.emit(this.updateForm);
    // }, 100);
  }

}
