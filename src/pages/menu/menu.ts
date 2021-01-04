import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { ScreemsizeProvider } from '../../providers/screemsize/screemsize';

export interface Ipage{
  title:string;
  pageName:string;
  tabsComponent?:string;
  index?:number,
  icon:string
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  isDesktop:boolean;
  rootPage:string;
  @ViewChild(Nav) nav:Nav;

  pages: Ipage[] = [
    {title:'Page 1', pageName:'Pag1Page', tabsComponent:'Pag1Page', index:0, icon:'home'},
    {title:'Page 2', pageName:'Pag2Page', tabsComponent:'Pag2Page', index:1, icon:'contacts'},
    {title:'Page 1', pageName:'SpecialPage', icon:'add'}
  ];
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private screemsize: ScreemsizeProvider) {
      screemsize.isDesktopView().subscribe(isDesktop=>{
        this.isDesktop = isDesktop;
        this.rootPage = isDesktop == true ? this.pages[0].pageName : 'TabsPage'
      });
  }

  openPage(page:Ipage){
    let params ={};

    if(page.index){
      params = {tabIndex:page.index}
    }

    if(this.nav.getActiveChildNavs()[0] && page.index != undefined && !this.isDesktop ){
      this.nav.getActiveChildNavs()[0].select(page.index);
    }else if(!this.isDesktop && page.index !=undefined){
      console.log('is mobile');
      this.nav.setRoot('TabsPage', params);
    }else{
      console.log(page.pageName)
      this.nav.setRoot(page.pageName,params);
    }

  }
  isActive(page:Ipage){
    let childNav = this.nav.getActiveChildNavs()[0];
    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.tabsComponent){
        return 'primary';
      }
      return;
    }

    if(this.nav.getActive()&& this.nav.getActive().name === page.pageName){
      return 'primary';
    }
  }
  

}
