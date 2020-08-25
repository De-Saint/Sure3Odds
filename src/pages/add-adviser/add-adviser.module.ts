import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAdviserPage } from './add-adviser';

@NgModule({
  declarations: [
    AddAdviserPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAdviserPage),
  ],
})
export class AddAdviserPageModule {}
