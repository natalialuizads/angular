import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ModulesModule } from './modules/modules.module';
import { BankingComponent } from './unit-tests/banking/banking.component';
import { InputOutputModule } from './input-output/input-output.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    LifecycleComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    BankingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModulesModule,
    InputOutputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
