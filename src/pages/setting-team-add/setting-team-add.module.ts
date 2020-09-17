import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTeamAddPage } from './setting-team-add';

@NgModule({
  declarations: [
    SettingTeamAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTeamAddPage),
  ],
})
export class SettingTeamAddPageModule {}
