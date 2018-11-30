import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AngularFireModule } from "angularfire2";
import { SignupPage } from './signup';

export const FirebaseConfig = {
  apiKey: "AIzaSyAIBPLFwnGQtelwGnPBAQz30JvDqGB0nlI",
  authDomain: "nicapp-firecodes.firebaseapp.com",
  databaseURL: "https://nicapp-firecodes.firebaseio.com",
  projectId: "nicapp-firecodes",
  storageBucket: "nicapp-firecodes.appspot.com",
  messagingSenderId: "831820679547"
};
@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    TranslateModule.forChild(),
    AngularFireModule.initializeApp(FirebaseConfig),
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule { }
