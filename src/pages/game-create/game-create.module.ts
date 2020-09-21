import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameCreatePage } from './game-create';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    GameCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(GameCreatePage),
    SelectSearchableModule
  ],
})
export class GameCreatePageModule {}
