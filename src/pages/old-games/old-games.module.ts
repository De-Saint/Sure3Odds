import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldGamesPage } from './old-games';

@NgModule({
  declarations: [
    OldGamesPage,
  ],
  imports: [
    IonicPageModule.forChild(OldGamesPage),
  ],
})
export class OldGamesPageModule {}
