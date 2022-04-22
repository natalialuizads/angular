import { CanActivateChildGuard } from './guard/can-activate-child.guard';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CanActivateGuard } from './guard/can-activate.guard';
import { CanLoadGuard } from './guard/can-load.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'portal-home',
    component: HomeComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato.module').then((m) => m.ContatoModule),
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActivateChildGuard]
  },
  {
    path: 'antigo-contato',
    loadChildren: () => import('./pages/contato/contato.module').then((m) => m.ContatoModule),
    canLoad: [CanLoadGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardsModuleRouting { }
