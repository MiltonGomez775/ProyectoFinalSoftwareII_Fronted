import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.html',
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrls: ['./recuperar-contrasena.css']
})
export class RecuperarContrasenaComponent {
  correo = '';
  mensaje = '';
  tokenGenerado = '';

  constructor(private authService: Auth) {}

  recuperar() {
    this.authService.recuperarContrasena(this.correo).subscribe({
      next: (response) => {
        this.mensaje = response.mensaje;
        this.tokenGenerado = response.token;
      },
      error: (error) => {
        this.mensaje = error.error.mensaje || 'Error al solicitar recuperación.';
      }
    });
  }
}
