import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://localhost:8080/api/citas';

  constructor(private http: HttpClient) {}

  crearCita(cita: any): Observable<any> {
    return this.http.post(this.apiUrl, cita);
  }

  listarCitasPendientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pendientes`);
  }

  listarCitasPorCliente(clienteId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?clienteId=${clienteId}`);
  }

  confirmarCita(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/confirmar`, {});
  }

  cancelarCita(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/cancelar`, {});
  }

  listarTodas() {
   return this.http.get<any[]>(`${this.apiUrl}`);
  }
}

