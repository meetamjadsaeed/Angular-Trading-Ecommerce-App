import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class UpdateProfileService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.UPDATE_PROFILE;

  constructor(private http: HttpClient) {}

  updateProfile(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endpoint}`, data);
  }
}
