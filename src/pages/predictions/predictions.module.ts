import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictionsPage } from './predictions';

@NgModule({
  declarations: [
    PredictionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PredictionsPage),
  ],
})
export class PredictionsPageModule {}
