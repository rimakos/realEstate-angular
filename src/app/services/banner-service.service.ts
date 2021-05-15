import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private baseUrl = 'http://localhost:8080/api/banners';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.baseUrl}`);
  }
  getById(id: number): Observable<Banner> {
    return this.http.get<Banner>(`${this.baseUrl}/${id}`);
  }

  save(banner: SaveBannerRequest): Observable<number> {
    return this.http.post<number>(this.baseUrl, banner, this.httpHeaders);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
export interface Banner {
  id: number;
  name: string;
  photo: string;
}

export interface SaveBannerRequest {
  id: number;
  name: string;
  photo: string;
}
