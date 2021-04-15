import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host = environment.host;

  constructor(private http:HttpClient) { 
  }

  getProducts():Observable<Product[]> {
    // let host = (Math.random()>0.2)?environment.host:environment.unreachableHost;
    return this.http.get<Product[]>(this.host + "/products");
  }

  getSelectedProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "/products?selected=true");
  }

  getAvailableProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "/products?available=true");
  }

  searchProducts(keyword:string):Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "/products?name_like="+keyword);
  }

  selectProduct(product:Product):Observable<Product> {
    return this.http.put<Product>(this.host + "/products/"+product.id,{...product,selected:!product.selected});
  }

  deleteProduct(id:number):Observable<void> {
    return this.http.delete<void>(this.host + "/products/" + id);
  }

  saveProduct(product:Product):Observable<Product> {
    return this.http.post<Product>(this.host + "/products/",product);
  }

  getProduct(id:number):Observable<Product> {
    return this.http.get<Product>(this.host + "/products/"+id);
  }

  updateProduct(product:Product):Observable<Product> {
    return this.http.put<Product>(this.host + "/products/"+product.id,product);
  }
  
}
