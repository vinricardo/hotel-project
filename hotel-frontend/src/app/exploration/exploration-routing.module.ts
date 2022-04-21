import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExplorationComponent } from './exploration.component';

const routes: Routes = [{ path: '', component: ExplorationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplorationRoutingModule {}
