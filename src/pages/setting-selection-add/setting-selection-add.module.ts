import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingSelectionAddPage } from './setting-selection-add';

@NgModule({
  declarations: [
    SettingSelectionAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingSelectionAddPage),
  ],
})
export class SettingSelectionAddPageModule {}
