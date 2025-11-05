import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { MenuComponent } from './components/menu/menu';
import { EditarInmuebleComponent } from './components/editar-inmueble/editar-inmueble';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena';
import { ListaCitas } from './components/lista-citas/lista-citas';
import { ListaEspaciosComponent } from './components/lista-espacios/lista-espacios';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'menu', component: MenuComponent },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
  
  //Citas
  { path: 'cita', component: ListaCitas },
  { path: 'lista-espacios/:idInmueble', component: ListaEspaciosComponent },


  //Inmuebles
  { path: 'editar-inmueble/:id', component: EditarInmuebleComponent }

];
