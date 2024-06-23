import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class AttributesService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.ATTRIBUTES;

  constructor(private http: HttpClient) {}

  getAttributes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.endpoint}`);
  }
}
