import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictionAdminPage } from './prediction-admin';

@NgModule({
  declarations: [
    PredictionAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PredictionAdminPage),
  ],
})
export class PredictionAdminPageModule {}
