import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSubAdminsPage } from './user-sub-admins';

@NgModule({
  declarations: [
    UserSubAdminsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSubAdminsPage),
  ],
})
export class UserSubAdminsPageModule {}
