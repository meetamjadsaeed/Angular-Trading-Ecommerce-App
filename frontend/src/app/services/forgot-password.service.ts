import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.FORGOT_PASSWORD;

  constructor(private http: HttpClient) {}

  forgotPassword(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.endpoint}`, data);
  }
}
