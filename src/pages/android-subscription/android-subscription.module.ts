import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AndroidSubscriptionPage } from './android-subscription';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    AndroidSubscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(AndroidSubscriptionPage),
    Angular4PaystackModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AndroidSubscriptionPageModule {}
