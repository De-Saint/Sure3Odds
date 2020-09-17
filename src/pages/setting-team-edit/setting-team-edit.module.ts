import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTeamEditPage } from './setting-team-edit';

@NgModule({
  declarations: [
    SettingTeamEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTeamEditPage),
  ],
})
export class SettingTeamEditPageModule {}
