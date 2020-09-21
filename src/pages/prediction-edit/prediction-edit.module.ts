import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictionEditPage } from './prediction-edit';
import { SelectSearchableModule } from 'ionic-select-searchable';
@NgModule({
  declarations: [
    PredictionEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PredictionEditPage),
    SelectSearchableModule
  ],
})
export class PredictionEditPageModule {}
