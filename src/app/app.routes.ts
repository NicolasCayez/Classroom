import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { LessonTeaserGroupComponent } from './shared-components/lessons/lesson-teaser-group/lesson-teaser-group.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  
  //  Route test composant Gheorghina
  { path: 'testg', component: HomeComponent},
  //  Route test composant Simon
  { path: 'tests', component: LessonTeaserGroupComponent, canActivate: [AuthGuardComponent]},
  //  Route test composant Nicolas
  { path: 'testn', component: LessonTeaserGroupComponent},
  // remplacer home par login
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: '**', loadComponent: () => import('./shared-components/not-found/not-found.component').then(m => m.NotFoundComponent) },
];
