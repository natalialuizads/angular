import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SobreRoutingModule } from "./sobre-routing.module";
import { SobreComponent } from "./sobre.component";

@NgModule({
  declarations: [SobreComponent],
  imports: [CommonModule, SobreRoutingModule],
  exports: [SobreComponent],
})
export class SobreModule {}
