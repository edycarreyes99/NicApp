import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { InAppBrowser,InAppBrowserOptions } from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage{

  constructor(
    public navCtrl: NavController,
    public browser: InAppBrowser
    )
     { 
       const options:InAppBrowserOptions={
         zoom:'no'

       }
       const navegador = this.browser.create('https://kingames.000webhostapp.com','_system',options);
     }


}
