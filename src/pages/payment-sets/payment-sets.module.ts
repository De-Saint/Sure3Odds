import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentSetsPage } from './payment-sets';

@NgModule({
  declarations: [
    PaymentSetsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentSetsPage),
  ],
})
export class PaymentSetsPageModule {}
