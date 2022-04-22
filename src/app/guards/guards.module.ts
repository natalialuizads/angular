import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardsModuleRouting } from './guards-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GuardsModuleRouting,
    RouterModule
  ],
  exports: [
    LoginComponent,
    HomeComponent
  ]
})
export class GuardsModule { }
