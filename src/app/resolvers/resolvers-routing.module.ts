import { PostResolver } from './resolver/post.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewResolver } from './resolver/new.resolver';
import { TopComponent } from './components/top/top.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'top',
    component: TopComponent,
    resolve: { message: NewResolver}
  },
  {
    path: 'post/:id',
    component: PostComponent,
    resolve: { newsData: PostResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResolversRoutingModule { }
