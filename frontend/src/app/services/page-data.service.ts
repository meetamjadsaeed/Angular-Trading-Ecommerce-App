// src/app/page-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageDataService {
  constructor(private http: HttpClient) {}

  getPageData(page: string): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos`);
  }
}
