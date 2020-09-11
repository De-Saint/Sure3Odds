import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictionSubAdminPage } from './prediction-sub-admin';

@NgModule({
  declarations: [
    PredictionSubAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PredictionSubAdminPage),
  ],
})
export class PredictionSubAdminPageModule {}
