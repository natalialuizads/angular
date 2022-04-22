import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ModulesModule } from './modules/modules.module';
import { BankingComponent } from './unit-tests/banking/banking.component';
import { InputOutputModule } from './input-output/input-output.module';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormsComponent } from './form/reactive-forms/reactive-forms.component';
import { FoodListComponent } from './services/food-list/food-list.component';
import { FoodAddComponent } from './services/food-list/food-add/food-add.component';
import { CrudComponent } from './http/crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeModule } from './routes/home.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    LifecycleComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    BankingComponent,
    TemplateFormComponent,
    ReactiveFormsComponent,
    FoodListComponent,
    FoodAddComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModulesModule,
    InputOutputModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    // HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
