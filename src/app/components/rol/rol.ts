import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario} from '../../services/usuario';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rol.html',
  styleUrls: ['./rol.css']
})
export class RolesComponent implements OnInit {
  usuarios: any[] = [];
  rolSeleccionado: { [id: string]: string } = {}; // Guarda rol seleccionado por usuario
  mensaje = '';
  mensajeTipo: 'exito' | 'error' | '' = '';

  constructor(private usuarioService: Usuario) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        // inicializar el rol seleccionado con el rol actual
        data.forEach(u => this.rolSeleccionado[u.id] = u.rol);
      },
      error: (err) => console.error('Error al cargar usuarios', err)
    });
  }

  cambiarRol(usuarioId: string) {
    const nuevoRol = this.rolSeleccionado[usuarioId];
    this.usuarioService.actualizarRol(usuarioId, nuevoRol).subscribe({
      next: () => this.mostrarMensaje(`Rol actualizado a ${nuevoRol}`, 'exito'),
      error: (err) => this.mostrarMensaje('Error al actualizar rol', 'error')
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
