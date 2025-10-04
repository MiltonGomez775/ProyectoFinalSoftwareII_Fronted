import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { InmuebleService } from '../../services/inmueble';

@Component({
  selector: 'app-listar-inmuebles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-inmuebles.html',
  styleUrls: ['./listar-inmuebles.css']
})
export class ListarInmueblesComponent implements OnInit {
  inmuebles: any[] = [];

  constructor(
    private inmuebleService: InmuebleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerInmuebles();
  }

  obtenerInmuebles() {
    this.inmuebleService.listarInmuebles().subscribe({
      next: (data) => (this.inmuebles = data),
      error: (err) => console.error('Error al cargar inmuebles', err),
    });
  }

  editarInmueble(id: string) {
    this.router.navigate(['/editar-inmueble', id]);
  }
}
