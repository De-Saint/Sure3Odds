import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingCountryManagePage } from './setting-country-manage';

@NgModule({
  declarations: [
    SettingCountryManagePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingCountryManagePage),
  ],
})
export class SettingCountryManagePageModule {}
