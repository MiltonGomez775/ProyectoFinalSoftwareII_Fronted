import { Component } from '@angular/core';
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
export class MenuComponent {
  componenteActivo: 'publicar' | 'listar' | 'roles' | '' = '';
  mostrarSubmenuInmueble = false;
  
  constructor(private router: Router) {} 

  toggleSubmenu() {
    this.mostrarSubmenuInmueble = !this.mostrarSubmenuInmueble;
  }

  mostrarComponente(componente: 'publicar' | 'listar' | 'roles') {
    this.componenteActivo = componente;
    this.mostrarSubmenuInmueble = false; }

  cerrarSesion() {
    localStorage.clear();       // Borra todo el localStorage
    this.router.navigate(['/login']);  // Redirige al login
  }
}