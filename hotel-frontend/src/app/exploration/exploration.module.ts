import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';

import { ExplorationRoutingModule } from './exploration-routing.module';
import { ExplorationComponent } from './exploration.component';

@NgModule({
  declarations: [ExplorationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ExplorationRoutingModule,
    SharedModule,
  ],
})
export class ExplorationModule {}
