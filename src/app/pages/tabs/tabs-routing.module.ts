import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children : [
      {
        path: 'tab1-home',
        loadChildren: () => import('./tab1-home/tab1-home.module').then( m => m.Tab1HomePageModule)
      },
      {
        path: 'tab2-task',
        loadChildren: () => import('./tab2-task/tab2-task.module').then( m => m.Tab2TaskPageModule)
      },
      {
        path: 'tab3-add',
        loadChildren: () => import('./tab3-add/tab3-add.module').then( m => m.Tab3AddPageModule)
      },
      {
        path: 'tab4-chat',
        loadChildren: () => import('./tab4-chat/tab4-chat.module').then( m => m.Tab4ChatPageModule)
      },
      {
        path: 'tab5-info',
        loadChildren: () => import('./tab5-info/tab5-info.module').then( m => m.Tab5InfoPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
