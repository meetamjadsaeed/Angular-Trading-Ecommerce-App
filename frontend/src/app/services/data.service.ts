// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from './api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCompanyInfo(): Observable<any> {
    return this.http.get(`${BASE_URL}${ENDPOINTS.COMPANY_INFO}`);
  }

  getSocialLinks(): Observable<any> {
    return this.http.get(`${BASE_URL}${ENDPOINTS.SOCIAL_LINKS}`);
  }

  getNews(): Observable<any> {
    return this.http.get(`${BASE_URL}${ENDPOINTS.NEWS}`);
  }

  postNewsletter(data: any): Observable<any> {
    return this.http.post(`${BASE_URL}${ENDPOINTS.NEWSLETTER}`, data);
  }
}
