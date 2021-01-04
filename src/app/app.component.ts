import { Component, HostListener } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreemsizeProvider } from '../providers/screemsize/screemsize';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private screemSizeServicio: ScreemsizeProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.screemSizeServicio.onResize(platform.width());
    });
  }

  @HostListener('window:resize',['$event'])
  private onResize(event){
    this.screemSizeServicio.onResize(event.target.innerWidth);
  }
}

