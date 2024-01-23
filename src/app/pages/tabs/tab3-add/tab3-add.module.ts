import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3AddPageRoutingModule } from './tab3-add-routing.module';

import { Tab3AddPage } from './tab3-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3AddPageRoutingModule
  ],
  declarations: [Tab3AddPage]
})
export class Tab3AddPageModule {}
