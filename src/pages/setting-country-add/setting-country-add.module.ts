import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingCountryAddPage } from './setting-country-add';

@NgModule({
  declarations: [
    SettingCountryAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingCountryAddPage),
  ],
})
export class SettingCountryAddPageModule {}
