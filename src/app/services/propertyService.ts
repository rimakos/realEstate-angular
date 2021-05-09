import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private baseUrl = 'http://localhost:8080/api/properties';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.baseUrl}/${id}`);
  }

  save(property: Property): Observable<number> {
    return this.http.post<number>(this.baseUrl, property, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  getbyCategory(id: number): Observable<Property[]>{
    return this.http.get<Property[]>(`${this.baseUrl}/byCategory/${id}`);
  }

}

export interface Property {
  id: number;
  price: number;
  description: string;
  title: string;
  type: string;
  yearBuild: number;
  bedroom: number;
  bathroom: number;
  propertyStatus: string;
  location: string;
  featured: boolean;
  categoryId: number;
}

export interface SavePropertyRequest {
  id: number;
  price: number;
  description: string;
  title: string;
  type: string;
  yearBuild: number;
  bedroom: number;
  bathroom: number;
  propertyStatus: string;
  location: string;
  featured: boolean;
  categoryId: number;
}

export enum PropertyStatus {
  Sale,
  Rent
}

export enum Type {
  Studio,
  Duplex,
  Triplex
}
