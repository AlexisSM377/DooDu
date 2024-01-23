import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4ChatPage } from './tab4-chat.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4ChatPageRoutingModule {}
