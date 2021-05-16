import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private baseUrl = 'http://localhost:8080/api/agents';
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Agent[]> {
    return this.http.get<Agent[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<Agent> {
    return this.http.get<Agent>(`${this.baseUrl}/${id}`);
  }

  save(agent: Agent): Observable<number> {
    return this.http.post<number>(this.baseUrl, agent, this.httpHeaders);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}

export interface Agent {
  id: number;
  name: string;
  photo: string;
  bio: string;
}
