import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPredictionPage } from './new-prediction';

@NgModule({
  declarations: [
    NewPredictionPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPredictionPage),
  ],
})
export class NewPredictionPageModule {}
