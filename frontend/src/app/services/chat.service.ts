import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { SellerImageUrl } from '../network/ApiUrl';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  // updateSeenMessages(token: string, messageSeen: any, apiType: string | null): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   return this.http.post(`${SellerImageUrl}/update-seen-messages`, messageSeen, { headers });
  // }

  // sendMessage(token: string, messageData: any, apiType: string | null): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   return this.http.post(`${SellerImageUrl}/send-message`, messageData, { headers });
  // }
}
