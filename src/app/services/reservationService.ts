import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Property} from './propertyService';
import {Client} from './clientService';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/reservations';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<SaveReservationRequest[]> {
    return this.http.get<SaveReservationRequest[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<SaveReservationRequest> {
    return this.http.get<SaveReservationRequest>(`${this.baseUrl}/${id}`);
  }

  save(reservation: SaveReservationRequest): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/newreservation`, reservation, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface SaveReservationRequest {
  id: number;
  name: string;
  finalPrice: number;
  comment: string;
  client: Client;
  property: Property;
}

export interface SaveReservationRequest {
  id: number;
  clientName: string;
  clientEmail: string;
  finalPrice: number;
  phoneNumber: string;
  propertyId: number;

}

