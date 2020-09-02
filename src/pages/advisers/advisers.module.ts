import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvisersPage } from './advisers';

@NgModule({
  declarations: [
    AdvisersPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvisersPage),
  ],
})
export class AdvisersPageModule {}
