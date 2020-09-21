import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMemberAddPage } from './user-member-add';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    UserMemberAddPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMemberAddPage),
    SelectSearchableModule
  ],
})
export class UserMemberAddPageModule {}
