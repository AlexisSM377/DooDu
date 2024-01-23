import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3AddPage } from './tab3-add.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3AddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3AddPageRoutingModule {}
