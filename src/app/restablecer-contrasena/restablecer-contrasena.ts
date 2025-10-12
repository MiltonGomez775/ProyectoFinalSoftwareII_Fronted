import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasena',
  standalone: true,
  templateUrl: './restablecer-contrasena.html',
  styleUrls: ['./restablecer-contrasena.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class RestablecerContrasenaComponent {
  token = '';
  nuevaContrasena = '';
  mensaje = '';
  exito = false;
  cargando = false;
  
  constructor(private authService: Auth,
  private router: Router) {}

  restablecer() {
    if (!this.token || !this.nuevaContrasena) {
      this.mensaje = 'Por favor completa todos los campos.';
      this.exito = false;
      return;
    }

    this.cargando = true;
    this.mensaje = '';

    this.authService.restablecerContrasena(this.token, this.nuevaContrasena).subscribe({
      next: (response) => {
        this.mensaje = response.mensaje || 'Contraseña actualizada correctamente.';
        this.exito = true;
        this.cargando = false;

        setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
      },
      error: (error) => {
        this.mensaje = error.error.mensaje || 'Error al restablecer contraseña.';
        this.exito = false;
        this.cargando = false;
      }
    });
  }
}
