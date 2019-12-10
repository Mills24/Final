import { IProduct } from './product2';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductService{
  constructor(private http : HttpClient){}

  productUrl = "api/products2/products2.json";

    getProducts() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl)
    }
}