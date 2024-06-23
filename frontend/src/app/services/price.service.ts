import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.PRICE;

  constructor(private http: HttpClient) {}

  getPrice(productId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}${this.endpoint}?product_id=${productId}`
    );
  }
}
