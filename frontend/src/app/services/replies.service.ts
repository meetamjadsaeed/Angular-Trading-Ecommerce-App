import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class RepliesService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.REPLIES;

  constructor(private http: HttpClient) {}

  getReplies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`);
  }

  addReply(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.endpoint}`, data);
  }

  updateReply(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endpoint}/${id}`, data);
  }

  deleteReply(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.endpoint}/${id}`);
  }
}
