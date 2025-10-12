import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inmueble } from '../inmueble/inmueble';
import { ListarInmueblesComponent } from '../listar-inmuebles/listar-inmuebles';
import { RolesComponent } from "../rol/rol";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, Inmueble, ListarInmueblesComponent, RolesComponent],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent implements OnInit {
  componenteActivo: 'publicar' | 'listar' | 'roles' | '' = '';
  mostrarSubmenuInmueble = false;
  rol: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.rol = localStorage.getItem('rol');
    console.log('Rol del usuario:', this.rol);
  }

  toggleSubmenu() {
    this.mostrarSubmenuInmueble = !this.mostrarSubmenuInmueble;
  }

  mostrarComponente(componente: 'publicar' | 'listar' | 'roles') {
    this.componenteActivo = componente;
    this.mostrarSubmenuInmueble = false;
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
