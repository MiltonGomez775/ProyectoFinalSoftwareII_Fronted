import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from '../../services/inmueble';

@Component({
  selector: 'app-editar-inmueble',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-inmueble.html',
  styleUrls: ['./editar-inmueble.css']
})
export class EditarInmuebleComponent implements OnInit {
  inmueble: any = {};
  mensaje = '';
  mensajeTipo: 'exito' | 'error' | '' = '';

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inmuebleService.obtenerInmueblePorId(id).subscribe({
        next: (data) => (this.inmueble = data),
        error: (err) => console.error('Error al obtener inmueble', err),
      });
    }
  }

  guardarCambios() {
    const id = this.inmueble.id;
    this.inmuebleService.actualizarInmueble(id, this.inmueble).subscribe({
      next: () => {
        this.mostrarMensaje('Inmueble actualizado correctamente ✅', 'exito');
        setTimeout(() => this.router.navigate(['/inmueble']), 2000);
      },
      error: (err) => {
        console.error(err);
        this.mostrarMensaje('Error al actualizar inmueble ❌', 'error');
      },
    });
  }

  mostrarMensaje(texto: string, tipo: 'exito' | 'error') {
    this.mensaje = texto;
    this.mensajeTipo = tipo;
    setTimeout(() => {
      this.mensaje = '';
      this.mensajeTipo = '';
    }, 3000);
  }
}
