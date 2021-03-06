import { environment } from './../../../../../../apps/sports/src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@assignments/data-models';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) { }


  // Get all products from database
  getProducts(category = null): Observable<Product[]> {
    const url =
      category !== null
        ? environment.api_url + `products?category=${category}`
        : environment.api_url + `products`;

    return this.httpClient.get<Product[]>(url);
  }

  //  Update product based on Id in database
  updateProducts(changes: Partial<Product>): Observable<Product[]> {
    console.log(changes);
    const url = environment.api_url + `products/` + changes.id;
    return this.httpClient.put<Product[]>(url, changes);
  }


// Getter and setter
  public setData(data: any) {
    this._data.next(data);
  }

  public getData(): Observable<any> {
    return this._data.asObservable();
  }
}