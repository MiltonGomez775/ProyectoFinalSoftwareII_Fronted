import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../services/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  nombre = '';
  correo = '';
  contrasena = '';
  mensaje = '';

  constructor(private usuario: Usuario, private router: Router) {}

  onRegister() {
    const nuevoUsuario = {
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.usuario.registrarUsuario(nuevoUsuario).subscribe({
      next: () => {
        this.mensaje = 'Usuario registrado correctamente';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: () => {
        this.mensaje = 'Error al registrar el usuario';
      }
    });
  }
}
