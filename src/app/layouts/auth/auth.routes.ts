import {AuthComponent} from "./auth.component";
import {Route} from "@angular/router";

export const routes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadComponent: () => import('../../views/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'signup',
        loadComponent: () => import('../../views/auth/signup/signup.component').then(m => m.SignupComponent)
      }
    ]
  }
]
