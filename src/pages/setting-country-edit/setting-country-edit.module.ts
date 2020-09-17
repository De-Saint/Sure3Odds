import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingCountryEditPage } from './setting-country-edit';

@NgModule({
  declarations: [
    SettingCountryEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingCountryEditPage),
  ],
})
export class SettingCountryEditPageModule {}
