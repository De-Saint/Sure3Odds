import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSubAdminEditPage } from './user-sub-admin-edit';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    UserSubAdminEditPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSubAdminEditPage),
    SelectSearchableModule
  ],
})
export class UserSubAdminEditPageModule {}
