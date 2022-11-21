import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';

export class NewProductAddRequest {
    constructor(
      public id : number,
      public name : string,
      public price : number,
      public category : string,
      public review : number,
      public status : string
    ) {}
  }


@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    public getProducts() : Observable<Product[]>{
      return this.http.get<any[]>("http://localhost:8080/product/");
  }

    public addNewProduct(product : Product) {
        return this.http.post<Product>(
          "http://localhost:8080/product/",
          product
        );
      }

      public updateProduct(product : Product) {
        return this.http.put<Product>(
          "http://localhost:8080/product/",
          product
        );
      }

      public deleteProduct(product : Product) {
        return this.http.delete<Product>(
          "http://localhost:8080/product/delete/" + product.id
        );
      }



}