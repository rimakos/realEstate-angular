import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private baseUrl = 'http://localhost:8080/api/pages';
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {  }

  getAll(): Observable<Page[]> {
    return this.http.get<Page[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Page> {
    return this.http.get<Page>(`${this.baseUrl}/${id}`);
  }

  save(post: Page): Observable<number> {
    return this.http.post<number>(this.baseUrl, post, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface Page {
  id: number;
  title: string;
  content: string;
  photo: string;
}
