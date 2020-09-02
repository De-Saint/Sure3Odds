import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdviserMembersPage } from './adviser-members';

@NgModule({
  declarations: [
    AdviserMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(AdviserMembersPage),
  ],
})
export class AdviserMembersPageModule {}
