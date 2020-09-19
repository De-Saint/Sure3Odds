import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTeamManagePage } from './setting-team-manage';

@NgModule({
  declarations: [
    SettingTeamManagePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTeamManagePage),
  ],
})
export class SettingTeamManagePageModule {}
