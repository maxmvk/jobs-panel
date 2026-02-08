import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () =>
      import('./pages/dashboard-page/dashboard.routes')
        .then(m => m.dashboardRoutes),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
