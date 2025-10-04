import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleService } from '../../services/inmueble';

@Component({
  selector: 'app-inmueble',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inmueble.html',
  styleUrls: ['./inmueble.css']
})
export class Inmueble {
  direccion = '';
  area: number | null = null;
  canon: number | null = null;
  administracionIncluida = false;
  valorAdministracion: number | null = null;
  descripcion = '';
  estado = 'disponible';
  fotos = '';
  mensaje = '';
  mensajeTipo: 'exito' | 'error' | '' = '';

  constructor(
    private inmuebleService: InmuebleService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  publicarInmueble() {
    const propietarioId = localStorage.getItem('usuario_id');
    if (!propietarioId) {
      this.mostrarMensaje('No hay sesión activa.', 'error');
      return;
    }

    const inmueble = {
      direccion: this.direccion,
      area: this.area,
      canon: this.canon,
      administracionIncluida: this.administracionIncluida,
      valorAdministracion: this.valorAdministracion,
      descripcion: this.descripcion,
      estado: this.estado,
      propietarioId,
      fotos: [this.fotos]
    };

    this.inmuebleService.publicarInmueble(inmueble).subscribe({
      next: () => {
        this.mostrarMensaje('Inmueble publicado correctamente', 'exito');
        this.cdr.detectChanges(); // 🔥 fuerza que Angular actualice la vista
        setTimeout(() => this.limpiarFormulario(), 100);
      },
      error: (err) => {
        console.error(err);
        this.mostrarMensaje('Error al publicar el inmueble', 'error');
        this.cdr.detectChanges(); // también aquí por si acaso
      }
    });
  }

  limpiarFormulario() {
    this.direccion = '';
    this.area = null;
    this.canon = null;
    this.administracionIncluida = false;
    this.valorAdministracion = null;
    this.descripcion = '';
    this.estado = 'disponible';
    this.fotos = '';
  }

  mostrarMensaje(texto: string, tipo: 'exito' | 'error') {
    this.mensaje = texto;
    this.mensajeTipo = tipo;

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      this.mensaje = '';
      this.mensajeTipo = '';
      this.cdr.detectChanges();
    }, 3000);
  }
}
