import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5InfoPage } from './tab5-info.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5InfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5InfoPageRoutingModule {}
