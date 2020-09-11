import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingLeaguesPage } from './setting-leagues';

@NgModule({
  declarations: [
    SettingLeaguesPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingLeaguesPage),
  ],
})
export class SettingLeaguesPageModule {}
