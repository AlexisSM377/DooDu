import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5InfoPageRoutingModule } from './tab5-info-routing.module';

import { Tab5InfoPage } from './tab5-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5InfoPageRoutingModule
  ],
  declarations: [Tab5InfoPage]
})
export class Tab5InfoPageModule {}
