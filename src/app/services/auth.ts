import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'https://proyectofinalsoftwareii-6.onrender.com/api/sesiones'; 
  private tokenKey = 'jwt_token';
  private userIdKey = 'usuario_id';
  private rolKey = 'rol';

  constructor(private http: HttpClient) {}

  login(credentials: { correo: string; contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.userIdKey, response.usuarioId);
        localStorage.setItem(this.rolKey, response.rol);
      })
    );
  }

  //Solicitar token de recuperación
  recuperarContrasena(correo: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recuperar`, { correo });
  }

  //Restablecer contraseña con el token
  restablecerContrasena(token: string, nuevaContrasena: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/restablecer`, { token, nuevaContrasena });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUsuarioId(): string | null {
    return localStorage.getItem(this.userIdKey);
  }

  getRol(): string | null {
    return localStorage.getItem(this.rolKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userIdKey);
    localStorage.removeItem(this.rolKey);
  }
}
