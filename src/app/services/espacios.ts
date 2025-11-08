import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EspacioService {
  private apiUrl = 'https://proyectofinalsoftwareii-8.onrender.com/api/espacios';

  constructor(private http: HttpClient) {}

  listarDisponibles(inmuebleId: string) {
    return this.http.get<any[]>(`${this.apiUrl}/disponibles?inmuebleId=${inmuebleId}`);
  }

}
