import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubscriptionAndroidPage } from './subscription-android';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    SubscriptionAndroidPage,
  ],
  imports: [
    IonicPageModule.forChild(SubscriptionAndroidPage),
    Angular4PaystackModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SubscriptionAndroidPageModule {}
