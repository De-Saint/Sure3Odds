import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentsPage } from './payments';
import { SuperTabsModule } from 'ionic2-super-tabs';


@NgModule({
  declarations: [
    PaymentsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentsPage),
    SuperTabsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PaymentsPageModule { }
