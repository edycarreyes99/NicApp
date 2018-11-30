import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

 

  constructor(public browser : InAppBrowser, public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }
  visualizar360(){
    const options:InAppBrowserOptions={
      zoom:'no'

    }
    const navegador = this.browser.create('https://nicapp-firecodes.firebaseapp.com/','_system',options);
  }

}
