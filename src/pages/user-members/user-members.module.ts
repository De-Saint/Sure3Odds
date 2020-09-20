import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMembersPage } from './user-members';

@NgModule({
  declarations: [
    UserMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(UserMembersPage),
  ],
})
export class UserMembersPageModule {}
