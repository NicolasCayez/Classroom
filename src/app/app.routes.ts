import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ModuleTeaserGroupComponent } from './shared-components/lessons/module-teaser-group/module-teaser-group.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  
  //  Route test composant Gheorghina
  { path: 'testg', component: HomeComponent},
  //  Route test composant Simon
  { path: 'tests', component: ModuleTeaserGroupComponent},
  //  Route test composant Nicolas
  { path: 'testn', component: ModuleTeaserGroupComponent},
  // remplacer home par login
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', loadComponent: () => import('./shared-components/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
