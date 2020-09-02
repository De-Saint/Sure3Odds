import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberAdvisersPage } from './member-advisers';

@NgModule({
  declarations: [
    MemberAdvisersPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberAdvisersPage),
  ],
})
export class MemberAdvisersPageModule {}
