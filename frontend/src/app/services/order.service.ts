import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://api.example.com'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  trackOrder(trackCode: string, token: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/order/track`,
      { trackCode },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
