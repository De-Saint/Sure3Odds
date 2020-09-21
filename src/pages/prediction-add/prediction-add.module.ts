import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PredictionAddPage } from './prediction-add';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    PredictionAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PredictionAddPage),
    SelectSearchableModule
  ],
})
export class PredictionAddPageModule {}
