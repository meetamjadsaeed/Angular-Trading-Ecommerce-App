import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class TopProductsService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.TOP_PRODUCTS;

  constructor(private http: HttpClient) {}

  getTopProducts(page: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}?page=${page}`);
  }
}
