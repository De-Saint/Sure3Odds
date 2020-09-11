import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingCountryPage } from './setting-country';

@NgModule({
  declarations: [
    SettingCountryPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingCountryPage),
  ],
})
export class SettingCountryPageModule {}
