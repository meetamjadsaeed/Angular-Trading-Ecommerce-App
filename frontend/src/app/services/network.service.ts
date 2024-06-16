// src/app/services/network.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private baseUrl = 'https://api.example.com'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  getAds() {
    return this.http.get(`${this.baseUrl}/ads`);
  }

  getProductsFilter(checked: any) {
    // Modify endpoint and parameters as per your API design
    return this.http.get(`${this.baseUrl}/products/filter`, {
      params: { checked },
    });
  }
}
