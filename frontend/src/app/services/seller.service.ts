import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS } from '../network/api-config';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  private baseUrl = BASE_URL;
  private sellerProfile = ENDPOINTS.SELLER_PROFILE;
  private sellerUpdateProfile = ENDPOINTS.SELLER_PROFILE_UPDATE;
  private sellerChangePassword = ENDPOINTS.SELLER_CHANGE_PASSWORD;
  private sellerProducts = ENDPOINTS.SELLER_PRODUCT_STORE_BULK;
  private sellerStoreProduct = ENDPOINTS.SELLER_PRODUCT_STORE;
  private sellerUpdateProduct = ENDPOINTS.SELLER_PRODUCT_UPDATE;
  private sellerDeleteProduct = ENDPOINTS.SELLER_PRODUCT_DELETE;
  private sellerNotifications = ENDPOINTS.SELLER_NOTIFICATIONS;
  private sellerMarkNotification = ENDPOINTS.SELLER_NOTIFICATIONS_Marked_Read;
  private sellerMarkReadNotification =
    ENDPOINTS.SELLER_NOTIFICATIONS_Marked_Clicked;
  private sellerOrders = ENDPOINTS.SELLER_ORDERS;
  private sellerOrderDetails = ENDPOINTS.SELLER_ORDER_SHOW;

  constructor(private http: HttpClient) {}

  getSellerProfile(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${this.sellerProfile}`);
  }

  updateSellerProfile(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${this.sellerUpdateProfile}`, data);
  }

  changeSellerPassword(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.sellerChangePassword}`, data);
  }

  getSellerProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.sellerProducts}`);
  }

  addSellerProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.sellerStoreProduct}`, data);
  }

  updateSellerProduct(id: number, data: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}${this.sellerUpdateProduct}${id}`,
      data
    );
  }

  deleteSellerProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.sellerDeleteProduct}${id}`);
  }

  getSellerNotifications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.sellerNotifications}`);
  }

  markNotificationAsClicked(notificationId: number): Observable<any> {
    return this.http.put(
      `${this.baseUrl}${this.sellerMarkReadNotification}${notificationId}`,
      {}
    );
  }

  markNotificationAsRead(notificationId: number): Observable<any> {
    return this.http.put(
      `${this.baseUrl}${this.sellerMarkNotification}${notificationId}`,
      {}
    );
  }

  getSellerOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}${this.sellerOrders}`);
  }

  getSellerOrderDetails(orderId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}${this.sellerOrderDetails}${orderId}`
    );
  }
}
