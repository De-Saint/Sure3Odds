import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingSelectionEditPage } from './setting-selection-edit';

@NgModule({
  declarations: [
    SettingSelectionEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingSelectionEditPage),
  ],
})
export class SettingSelectionEditPageModule {}
