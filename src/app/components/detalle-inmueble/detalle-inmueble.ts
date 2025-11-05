import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleService } from '../../services/inmueble';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-inmueble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-inmueble.html',
  styleUrls: ['./detalle-inmueble.css']
})
export class DetalleInmuebleComponent implements OnInit {
  inmueble: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inmuebleService: InmuebleService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.inmuebleService.obtenerDetalleInmueble(id!).subscribe({
      next: (data) => this.inmueble = data,
      error: (err) => console.error('Error al cargar detalle', err)
    });
  }


  volver(): void {
    this.router.navigate(['/inmuebles']); // vuelve a la lista
  }
}
