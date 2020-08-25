import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignAdviserPage } from './assign-adviser';

@NgModule({
  declarations: [
    AssignAdviserPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignAdviserPage),
  ],
})
export class AssignAdviserPageModule {}
