import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingLeagueAddPage } from './setting-league-add';
import { SelectSearchableModule } from 'ionic-select-searchable';
@NgModule({
  declarations: [
    SettingLeagueAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingLeagueAddPage),
    SelectSearchableModule,
  ],
})
export class SettingLeagueAddPageModule {}
