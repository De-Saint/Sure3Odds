import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTeamAssignPage } from './setting-team-assign';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SettingTeamAssignPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTeamAssignPage),
    SelectSearchableModule
  ],
})
export class SettingTeamAssignPageModule {}
