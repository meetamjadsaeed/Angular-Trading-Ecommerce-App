import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private baseUrl = BASE_URL;
  private endpoint = ENDPOINTS.CHATS;

  constructor(private http: HttpClient) {}

  getChats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  markAsSeen(chatId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.endpoint}/${chatId}/seen`, {});
  }
}
