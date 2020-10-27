import { HeaderButtons } from '../../../../auth/data-models/header-button';
import { Product } from './../../../../auth/data-models';
import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Image } from 'src/app/auth/data-models/image';
import { Details } from 'src/app/auth/data-models/details';
import { Main } from 'src/app/auth/data-models/main';
import { Service } from 'src/app/auth/data-models/service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
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
  public setData(data: any): void {
    this.data.next(data);
  }

  public getData(): Observable<any> {
    return this.data.asObservable();
  }

   // Get all products from database
   getDetails(category = null): Observable<Details[]> {
    const url =
      category !== null
        ? environment.api_url + `details?category=${category}`
        : environment.api_url + `details`;

    return this.httpClient.get<Details[]>(url);
  }

  // Get all HeaderButtons from database
  getHeaderButtons(category = null): Observable<HeaderButtons[]> {
    const url =
      category !== null
        ? environment.api_url + `headers-button?category=${category}`
        : environment.api_url + `headers-button`;

    return this.httpClient.get<HeaderButtons[]>(url);
  }

  // Get all products from database
  getServices(category = null): Observable<Service[]> {
    const url =
      category !== null
        ? environment.api_url + `Services?category=${category}`
        : environment.api_url + `Services`;

    return this.httpClient.get<Service[]>(url);
  }

  // Get all products from database
  getImages(category = null): Observable<Image[]> {
    const url =
      category !== null
        ? environment.api_url + `images?category=${category}`
        : environment.api_url + `images`;

    return this.httpClient.get<Image[]>(url);
  }



  // Get all products from database
  getMain(category = null): Observable<Main[]> {
    const url =
      category !== null
        ? environment.api_url + `main?category=${category}`
        : environment.api_url + `main`;

    return this.httpClient.get<Main[]>(url);
  }
}
