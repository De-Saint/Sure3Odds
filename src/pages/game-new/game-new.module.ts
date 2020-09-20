import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameNewPage } from './game-new';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    GameNewPage,
  ],
  imports: [
    IonicPageModule.forChild(GameNewPage),
    SelectSearchableModule
  ],
})
export class GameNewPageModule {}
