import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2TaskPage } from './tab2-task.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2TaskPage,
    children : [
      {
        path: 'tab3-add',
        loadChildren: () => import('./tab3-add/tab3-add.module').then( m => m.Tab3AddPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2TaskPageRoutingModule {}
