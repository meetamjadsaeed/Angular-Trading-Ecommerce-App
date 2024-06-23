import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.PRODUCTS;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.endpoint}/${id}`);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.endpoint}`, data);
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endpoint}/${id}`, data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.endpoint}/${id}`);
  }

  getProductsByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  filterProductsByPrice(startPrice: number, endPrice: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/filter`, {
      startPrice,
      endPrice,
    });
  }

  sortProductsByOrder(highToLow: boolean): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/sort`, { highToLow });
  }
}
