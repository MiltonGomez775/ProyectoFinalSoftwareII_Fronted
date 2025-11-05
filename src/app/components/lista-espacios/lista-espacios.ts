import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EspacioService } from '../../services/espacios';
import { CitaService } from '../../services/citas';

@Component({
  selector: 'app-lista-espacios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-espacios.html',
  styleUrls: ['./lista-espacios.css']
})
export class ListaEspaciosComponent implements OnInit {
  idInmueble!: string;
  espacios: any[] = [];
  clienteId = '68e16c746e9dc534052bd7e8'; // ⚠️ ID de cliente fijo por ahora (luego lo tomas del login)

  constructor(
    private route: ActivatedRoute,
    private espacioService: EspacioService,
    private citaService: CitaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idInmueble = params.get('idInmueble')!;
      this.cargarEspacios();
    });
  }

  cargarEspacios(): void {
    this.espacioService.listarDisponibles(this.idInmueble).subscribe({
      next: data => this.espacios = data,
      error: err => console.error('Error al cargar espacios disponibles', err)
    });
  }

  reservarCita(espacioId: string): void {
    const cita = {
      clienteId: this.clienteId,
      espacioId: espacioId
    };

    this.citaService.crearCita(cita).subscribe({
      next: () => {
        alert('✅ Cita reservada correctamente');
        this.cargarEspacios(); // recargar lista
      },
      error: err => {
        console.error('Error al reservar cita', err);
        alert('❌ Error al reservar cita');
      }
    });
  }
}
