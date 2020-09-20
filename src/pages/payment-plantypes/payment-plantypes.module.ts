import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPlantypesPage } from './payment-plantypes';

@NgModule({
  declarations: [
    PaymentPlantypesPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPlantypesPage),
  ],
})
export class PaymentPlantypesPageModule {}
