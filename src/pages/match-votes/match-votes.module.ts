import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchVotesPage } from './match-votes';

@NgModule({
  declarations: [
    MatchVotesPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchVotesPage),
  ],
})
export class MatchVotesPageModule {}
