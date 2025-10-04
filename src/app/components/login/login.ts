import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  correo = '';
  contrasena = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  onLogin() {
    this.auth.login({ correo: this.correo, contrasena: this.contrasena }).subscribe({
      next: () => {
        this.router.navigate(['/menu']);
      },
      error: () => {
        this.error = 'Credenciales incorrectas';
      }
    });
  }
}
