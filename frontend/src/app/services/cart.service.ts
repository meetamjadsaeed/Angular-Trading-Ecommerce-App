import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = BASE_URL;
  private cartEndpoint = ENDPOINTS.CART;

  constructor(private http: HttpClient) {}

  addToCart(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${this.cartEndpoint}`, data);
  }
}
