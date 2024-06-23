import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class RemoveAllService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.REMOVE_ALL;

  constructor(private http: HttpClient) {}

  removeAllItems(): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.endpoint}`);
  }
}
