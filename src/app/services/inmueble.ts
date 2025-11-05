import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InmuebleService {
  private apiUrl = 'https://proyectofinalsoftwareii-6.onrender.com/api/inmuebles';

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

  obtenerInmueblePorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  actualizarInmueble(id: string, inmueble: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, inmueble);
  }

  filtrarInmuebles(
    direccion?: string,
    minPrecio?: number,
    maxPrecio?: number,
    estado?: string
  ): Observable<any[]> {
    let params = new HttpParams();

    if (direccion) params = params.set('direccion', direccion);
    if (minPrecio) params = params.set('minPrecio', minPrecio);
    if (maxPrecio) params = params.set('maxPrecio', maxPrecio);
    if (estado) params = params.set('estado', estado);

    return this.http.get<any[]>(`${this.apiUrl}/filtrar`, { params });
  }

  obtenerDetalleInmueble(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/detalles/${id}`);
  }

}
