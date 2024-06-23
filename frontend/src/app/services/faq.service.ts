import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.FAQ;

  constructor(private http: HttpClient) {}

  getFaqs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`);
  }
}
