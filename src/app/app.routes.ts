import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent},

  // remplacer home par login
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', loadComponent: () => import('./shared-components/not-found/not-found.component').then(m => m.NotFoundComponent) },

];
