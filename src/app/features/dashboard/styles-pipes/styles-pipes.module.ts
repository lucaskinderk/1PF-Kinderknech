import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylesPipesRoutingModule } from './styles-pipes-routing.module';
import { StylesPipesComponent } from './styles-pipes.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [StylesPipesComponent],
  imports: [CommonModule, StylesPipesRoutingModule, SharedModule],
  exports: [StylesPipesComponent],
})
export class StylesPipesModule {}
