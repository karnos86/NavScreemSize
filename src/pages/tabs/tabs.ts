import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreemsizeProvider } from '../../providers/screemsize/screemsize';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  isDesktop:boolean;
  myindex:number; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
   
    this.myindex = navParams.data.tabIndex || 0;
  }

}