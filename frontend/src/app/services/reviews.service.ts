import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.REVIEWS;

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`);
  }

  addReview(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.endpoint}`, data);
  }

  updateReview(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endpoint}/${id}`, data);
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.endpoint}/${id}`);
  }
}
