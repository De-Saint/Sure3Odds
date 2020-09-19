import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTeamAddPage } from './setting-team-add';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SettingTeamAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTeamAddPage),
    SelectSearchableModule
  ],
})
export class SettingTeamAddPageModule {}
