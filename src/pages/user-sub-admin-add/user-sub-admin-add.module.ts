import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSubAdminAddPage } from './user-sub-admin-add';

@NgModule({
  declarations: [
    UserSubAdminAddPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSubAdminAddPage),
  ],
})
export class UserSubAdminAddPageModule {}
