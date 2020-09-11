import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchCommentsPage } from './match-comments';

@NgModule({
  declarations: [
    MatchCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchCommentsPage),
  ],
})
export class MatchCommentsPageModule {}
