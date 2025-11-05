import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  private apiUrl = 'https://proyectofinalsoftwareii-6.onrender.com/api/usuarios';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, usuario);
  }

  listarUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  actualizarRol(usuarioId: string, nuevoRol: string): Observable<any> {
    const url = `${this.apiUrl}/${usuarioId}/rol?nuevoRol=${nuevoRol}`;
    return this.http.put(url, {});
  }

  obtenerUsuarioPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  obtenerPropietarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/propietarios`);
  }
}
