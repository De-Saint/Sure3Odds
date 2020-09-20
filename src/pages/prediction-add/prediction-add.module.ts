import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictionAddPage } from './prediction-add';

@NgModule({
  declarations: [
    PredictionAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PredictionAddPage),
  ],
})
export class PredictionAddPageModule {}
