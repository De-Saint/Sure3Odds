import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera'; 
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Global } from '../providers/global';
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
    IonicModule.forRoot(MyApp,config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,Global,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
