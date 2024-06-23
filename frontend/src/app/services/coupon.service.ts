import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.COUPON;
  private applyEndpoint = ENDPOINTS.APPLY;

  constructor(private http: HttpClient) {}

  getCoupons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`);
  }

  applyCoupon(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.applyEndpoint}`, data);
  }

  removeCoupon(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.endpoint}/${id}`);
  }
}
