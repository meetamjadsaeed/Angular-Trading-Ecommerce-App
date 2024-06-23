import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class GetPagesService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.GET_PAGE;

  constructor(private http: HttpClient) {}

  getPages(type: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}?type=${type}`);
  }
}
