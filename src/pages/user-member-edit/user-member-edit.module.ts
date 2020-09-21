import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMemberEditPage } from './user-member-edit';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    UserMemberEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMemberEditPage),
    SelectSearchableModule
  ],
})
export class UserMemberEditPageModule {}
