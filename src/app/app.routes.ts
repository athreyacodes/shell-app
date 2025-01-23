import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';

export const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  {
    path: 'portfolio',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry:
          'https://portfolio-angular-d4f1f.firebaseapp.com/remoteEntry.js',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
  },
  { path: '**', redirectTo: 'one' },
];
