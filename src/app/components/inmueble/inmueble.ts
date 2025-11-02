import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleService } from '../../services/inmueble';
import { Usuario } from '../../services/usuario';

@Component({
  selector: 'app-inmueble',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inmueble.html',
  styleUrls: ['./inmueble.css']
})
export class Inmueble implements OnInit {
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

  propietarios: any[] = [];
  propietarioId: string = '';

  constructor(
    private inmuebleService: InmuebleService,
    private Usuario: Usuario,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.Usuario.obtenerPropietarios().subscribe({
      next: (data) => {
        this.propietarios = data;
      },
      error: (err) => {
        console.error('Error cargando propietarios', err);
      }
    });
  }

  publicarInmueble() {
    if (!this.propietarioId) {
      this.mostrarMensaje('Selecciona un propietario.', 'error');
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
      propietarioId: this.propietarioId,
      fotos: [this.fotos]
    };

    this.inmuebleService.publicarInmueble(inmueble).subscribe({
      next: () => {
        this.mostrarMensaje('Inmueble publicado correctamente', 'exito');
        this.cdr.detectChanges();
        setTimeout(() => this.limpiarFormulario(), 100);
      },
      error: (err) => {
        console.error(err);
        this.mostrarMensaje('Error al publicar el inmueble', 'error');
        this.cdr.detectChanges();
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
    this.propietarioId = '';
  }

  mostrarMensaje(texto: string, tipo: 'exito' | 'error') {
    this.mensaje = texto;
    this.mensajeTipo = tipo;
    setTimeout(() => {
      this.mensaje = '';
      this.mensajeTipo = '';
      this.cdr.detectChanges();
    }, 3000);
  }
}
