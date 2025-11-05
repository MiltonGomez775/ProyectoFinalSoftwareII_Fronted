import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleService } from '../../services/inmueble';

@Component({
  selector: 'app-listar-inmuebles-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listar-inmueble-cliente.html',
  styleUrls: ['./listar-inmueble-cliente.css']
})
export class ListarInmueblesClienteComponent implements OnInit {
  inmuebles: any[] = [];

  // Filtros
  direccion: string = '';
  minPrecio?: number;
  maxPrecio?: number;
  estado: string = '';

  constructor(
    private inmuebleService: InmuebleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerInmuebles();
  }

  obtenerInmuebles(): void {
    this.inmuebleService.listarInmuebles().subscribe({
      next: (data) => (this.inmuebles = data),
      error: (err) => console.error('Error al cargar inmuebles', err)
    });
  }

  filtrar(): void {
    this.inmuebleService.filtrarInmuebles(
      this.direccion,
      this.minPrecio,
      this.maxPrecio,
      this.estado
    ).subscribe({
      next: (data) => (this.inmuebles = data),
      error: (err) => console.error('Error al filtrar inmuebles', err)
    });
  }

  limpiarFiltros(): void {
    this.direccion = '';
    this.minPrecio = undefined;
    this.maxPrecio = undefined;
    this.estado = '';
    this.obtenerInmuebles();
  }

  verDisponibilidad(id: string): void {
    this.router.navigate(['/lista-espacios', id]);
  }
}
