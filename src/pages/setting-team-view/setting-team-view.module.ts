import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingTeamViewPage } from './setting-team-view';

@NgModule({
  declarations: [
    SettingTeamViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingTeamViewPage),
  ],
})
export class SettingTeamViewPageModule {}
