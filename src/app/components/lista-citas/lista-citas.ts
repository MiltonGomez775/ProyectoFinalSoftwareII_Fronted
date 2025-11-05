import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../services/citas';

@Component({
  selector: 'app-lista-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-citas.html',
  styleUrls: ['./lista-citas.css']
})
export class ListaCitas implements OnInit {

  citasPendientes: any[] = [];

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.cargarCitasPendientes();
  }

  cargarCitasPendientes(): void {
    this.citaService.listarCitasPendientes().subscribe({
      next: (data) => this.citasPendientes = data,
      error: (err) => console.error('Error al cargar citas', err)
    });
  }

  confirmarCita(id: string) {
    this.citaService.confirmarCita(id).subscribe(() => this.cargarCitasPendientes());
  }

  cancelarCita(id: string) {
    this.citaService.cancelarCita(id).subscribe(() => this.cargarCitasPendientes());
  }
}
