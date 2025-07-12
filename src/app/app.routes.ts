import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/coming-soon/coming-soon.component').then(
            (m) => m.ComingSoonComponent
          ),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/order-list/order-list.component').then(
            (m) => m.OrderListComponent
          ),
      },
      {
        path: 'team',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/team/team.component').then(
                (m) => m.TeamComponent
              ),
          },
          {
            path: 'add',
            loadComponent: () =>
              import('./pages/team/add-member/add-member.component').then(
                (m) => m.AddMemberComponent
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
