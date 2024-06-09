import { Routes } from '@angular/router';
import { PATH } from './models/routes.model';
import { authorizedGuard, nonAuthorizedGuard } from './auth/auth.guard';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { CoockiePolicyComponent } from './policyPages/coockie-policy/coockie-policy.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  //   pathMatch: 'full',
  //   canActivate: [nonAuthorizedGuard],
  // },
  {
    path: '',
    component: CoockiePolicyComponent,
    pathMatch: 'full',
    canActivate: [nonAuthorizedGuard],
  },
  {
    path: PATH.root.auth,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [nonAuthorizedGuard],
  },
];
