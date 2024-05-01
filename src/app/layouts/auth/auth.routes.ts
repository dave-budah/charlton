import {Route} from "@angular/router";
import {PublicComponent} from "./public.component";

export const routes: Route[] = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('../../views/public/home/home.component').then(m => m.HomeComponent)
      }
    ]
  }
]
