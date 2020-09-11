import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingSelectionsPage } from './setting-selections';

@NgModule({
  declarations: [
    SettingSelectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingSelectionsPage),
  ],
})
export class SettingSelectionsPageModule {}
