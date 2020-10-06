import { PaymentsPage } from './../pages/payments/payments';
import { SettingPage } from './../pages/setting/setting';
import { ReportsPage } from './../pages/reports/reports';
import { ErrorInterceptorProvider } from './../providers/error-interceptor/error-interceptor';
import { RequestInterceptorProvider } from './../providers/request-interceptor/request-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Sure3Odds } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenicationProvider } from '../providers/authenication/authenication';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { GamesProvider } from '../providers/games/games';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { PaymentsProvider } from '../providers/payments/payments';
import { HTTP } from '@ionic-native/http';

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
    Sure3Odds,
    ReportsPage,
    SettingPage,
    PaymentsPage
  ],
  imports: [
    BrowserModule, IonicImageViewerModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(Sure3Odds, config),
    SelectSearchableModule,
  ],
  bootstrap: [IonicApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [
    Sure3Odds,
    ReportsPage,
    SettingPage,
    PaymentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthenicationProvider, GamesProvider,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorProvider, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorProvider, multi: true },
    PaymentsProvider,

  ]
})
export class AppModule { }
