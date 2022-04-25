import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolversRoutingModule } from './resolvers-routing.module';
import { TopComponent } from './components/top/top.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    ResolversRoutingModule,
    HttpClientModule
  ]
})
export class ResolversModule { }
