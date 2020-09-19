import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTeamManagePage } from './setting-team-manage';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SettingTeamManagePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTeamManagePage),
    SelectSearchableModule
  ],
})
export class SettingTeamManagePageModule {}
