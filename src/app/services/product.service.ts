import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

// const apiUrl = 'http://localhost:3000/products';
import { productsUrl } from 'src/app/config/api';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //List product for API
  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }
}
