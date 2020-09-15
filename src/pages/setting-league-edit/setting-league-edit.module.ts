import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingLeagueEditPage } from './setting-league-edit';

@NgModule({
  declarations: [
    SettingLeagueEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingLeagueEditPage),
  ],
})
export class SettingLeagueEditPageModule {}
