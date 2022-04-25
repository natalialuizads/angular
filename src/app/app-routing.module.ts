import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'guards',
    loadChildren: () => import('./guards/guards.module').then((m) => m.GuardsModule)
  }, {
    path: 'resolvers',
    loadChildren: () => import('./resolvers/resolvers.module').then((m) => m.ResolversModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
