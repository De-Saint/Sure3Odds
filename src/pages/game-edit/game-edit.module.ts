import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameEditPage } from './game-edit';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    GameEditPage,
  ],
  imports: [
    IonicPageModule.forChild(GameEditPage),
    SelectSearchableModule
  ],
})
export class GameEditPageModule {}
