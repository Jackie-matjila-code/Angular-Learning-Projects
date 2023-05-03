import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../layout/category';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }

  getAllCategories(): Observable<Category> {
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  createProduct(productBody: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody);
  }

  viewProduct(productId: any): Observable<Product> {
    const productUrl = `http://localhost:3000/products/${productId}`;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProduct(productId: any, productBody: any): Observable<Product> {
    const productUrl = `http://localhost:3000/products/${productId}`;
    return this.httpClient.put<Product>(productUrl, productBody);
  }

  deleteProduct(productId: any): Observable<Product> {
    const productUrl = `http://localhost:3000/products/${productId}`;
    return this.httpClient.delete<Product>(productUrl);
  }

  searchCategoryProducts(categoryId: any): Observable<Product> {
    const productUrl = `http://localhost:3000/products?categoryId=${categoryId}`;
    return this.httpClient.get<Product>(productUrl);
  }

  searchDateProducts(dateParam: any): Observable<Product> {
    const productUrl = `http://localhost:3000/products/category/${dateParam}`;
    return this.httpClient.get<Product>(productUrl);
  }
}
