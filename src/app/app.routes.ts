import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registro } from './components/registro/registro';
import { MenuComponent } from './components/menu/menu';
import { EditarInmuebleComponent } from './components/editar-inmueble/editar-inmueble';
import { ListarInmueblesComponent } from './components/listar-inmuebles/listar-inmuebles';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'menu', component: MenuComponent },
  
  //Inmuebles
  { path: 'editar-inmueble/:id', component: EditarInmuebleComponent }

];
