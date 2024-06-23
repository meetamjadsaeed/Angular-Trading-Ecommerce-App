import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.CUSTOMER;

  constructor(private http: HttpClient) {}

  getCustomer(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.endpoint}`);
  }

  updateCustomer(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endpoint}`, data);
  }
}
