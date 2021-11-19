import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SobreComponent } from './pages/sobre/sobre.component';
const routes: Routes = [
  // Rota inicial, utilizamos o patchFull para falar que queremos rota toda.
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Carregamento Lento
  {
    path: 'sobre',
    loadChildren: () =>
      import('./pages/sobre/sobre.module').then((m) => m.SobreModule),
  },

  // Criando uma rota filha
  {
    path: '404',
    component: NotFoundComponent,
    children: [{ path: 'erro', component: NotFoundComponent }],
  },

  // Criando parametro na rota
  {
    path: 'perfil/:id',
    component: PerfilComponent,
  },

  // Rota coringa, redireciona para uma rota existente
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
