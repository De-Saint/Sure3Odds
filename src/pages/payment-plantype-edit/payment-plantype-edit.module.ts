import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPlantypeEditPage } from './payment-plantype-edit';

@NgModule({
  declarations: [
    PaymentPlantypeEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentPlantypeEditPage),
  ],
})
export class PaymentPlantypeEditPageModule {}
