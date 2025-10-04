import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InmuebleService {
  private apiUrl = 'http://localhost:8080/api/inmuebles';

  constructor(private http: HttpClient) {}

  publicarInmueble(inmueble: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.apiUrl, inmueble, { headers });
  }

  listarInmuebles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
