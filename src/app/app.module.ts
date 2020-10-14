import { ErrorInterceptorProvider } from './../providers/error-interceptor/error-interceptor';
import { RequestInterceptorProvider } from './../providers/request-interceptor/request-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Sure3Odds } from './app.component';
import { AuthenicationProvider } from '../providers/authenication/authenication';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GamesProvider } from '../providers/games/games';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { PaymentsProvider } from '../providers/payments/payments';
import { HTTP } from '@ionic-native/http';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ReportsPageModule } from '../pages/reports/reports.module';
import { PaymentsPageModule } from '../pages/payments/payments.module';
import { NativeHttpProvider } from '../providers/native-http/native-http';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { AppVersion } from '@ionic-native/app-version';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2';


var config = {
  backButtonText: '',
  backButtonIcon: 'md-arrow-back',
  iconMode: 'md',
  mode: 'md',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  tabsPlacement: 'top',
  pageTransition: 'md',
};
@NgModule({
  declarations: [
    Sure3Odds
  ],
  imports: [
    BrowserModule, IonicImageViewerModule,
    HttpClientModule,
    IonicModule.forRoot(Sure3Odds, config),
    SelectSearchableModule,
    SettingPageModule,
    ReportsPageModule,
    PaymentsPageModule,
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [
    Sure3Odds
  ],
  providers: [
    HTTP,
    AppVersion,
    InAppPurchase2,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenicationProvider, PaymentsProvider, GamesProvider, NativeHttpProvider,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorProvider, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorProvider, multi: true },
  ]
})
export class AppModule { }
