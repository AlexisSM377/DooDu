import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2TaskPageRoutingModule } from './tab2-task-routing.module';

import { Tab2TaskPage } from './tab2-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2TaskPageRoutingModule
  ],
  declarations: [Tab2TaskPage]
})
export class Tab2TaskPageModule {}
