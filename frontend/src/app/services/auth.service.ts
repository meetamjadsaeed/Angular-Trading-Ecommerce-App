import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = BASE_URL;
  private authEndpoint = ENDPOINTS.AUTH;

  constructor(private http: HttpClient) {}

  authenticate(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.authEndpoint}`, data);
  }
}
