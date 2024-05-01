import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./layouts/public/public.routes').then(m => m.routes)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/auth/auth.routes').then(m => m.routes)
  }
];
