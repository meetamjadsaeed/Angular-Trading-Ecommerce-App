import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  private baseUrl = BASE_URL;
  private addEndpoint = ENDPOINTS.ADD;

  constructor(private http: HttpClient) {}

  addItem(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.addEndpoint}`, data);
  }
}
