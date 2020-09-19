import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingLeagueViewPage } from './setting-league-view';

@NgModule({
  declarations: [
    SettingLeagueViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingLeagueViewPage),
  ],
})
export class SettingLeagueViewPageModule {}
