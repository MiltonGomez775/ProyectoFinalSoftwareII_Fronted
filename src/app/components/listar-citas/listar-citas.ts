import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaService } from '../../services/citas';

@Component({
  selector: 'app-listar-citas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-citas.html',
  styleUrls: ['./listar-citas.css']
})
export class ListarCitasComponent implements OnInit {

  citas: any[] = [];

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(): void {
    this.citaService.listarTodas().subscribe({
      next: (data) => this.citas = data,
      error: (err) => console.error('Error al cargar las citas', err)
    });
  }
}
