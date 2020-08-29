import { ErrorInterceptorProvider } from './../providers/error-interceptor/error-interceptor';
import { RequestInterceptorProvider } from './../providers/request-interceptor/request-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera'; 
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Global } from '../providers/global';
import { AuthenicationProvider } from '../providers/authenication/authenication';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
var config = {
  backButtonText: '',
  backButtonIcon: 'md-arrow-back',
  iconMode: 'md',
  mode:'md',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  pageTransition: 'md',
};
@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,IonicImageViewerModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,config),
  ],
  bootstrap: [IonicApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,Global,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenicationProvider,    
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorProvider, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorProvider, multi: true },
  ]
})
export class AppModule {}
