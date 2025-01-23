import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

export const PORTFOLIO_DEV = "'https://portfolio-dev-5f375.firebaseapp.com";
export const PORTFOLIO_ANGULAR =
  "'https://portfolio-angular-d4f1f.firebaseapp.com";
export const PORTFOLIO_AREACT = '';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  {
    path: 'portfolio',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: PORTFOLIO_ANGULAR + '/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  { path: '**', redirectTo: 'one' },
];
