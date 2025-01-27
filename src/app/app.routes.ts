import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { HomeComponent } from './core/home/home.component';

export const PORTFOLIO_DEV = 'https://portfolio-dev-5f375.firebaseapp.com';
export const PORTFOLIO_ANGULAR =
  'https://portfolio-angular-d4f1f.firebaseapp.com';
export const PORTFOLIO_AREACT = '';

export const PORTFOLIO_DEV_LOCAL = 'http://localhost:4202';
export const PORTFOLIO_ANGULAR_LOCAL = 'http://localhost:4202/portfolio';
export const PORTFOLIO_AREACT_LOCAL = '';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'portfolio',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: PORTFOLIO_ANGULAR_LOCAL + '/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  { path: '**', redirectTo: '/home' },
];
