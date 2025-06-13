import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () => import('portfolio/Module').then((m) => m.AppModule),
  },
];
