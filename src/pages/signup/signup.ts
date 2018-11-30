import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

import { ServicioService } from "../../servicio.service";

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  sexo:string;
  account: { name: string, email: string, password: string, telefono:string} = {
    name: '',
    email: '',
    password: '',
    telefono: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public servicio: ServicioService,
    public alert: AlertController
    ) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service

    if((this.account.email || this.account.password || this.sexo=='Sexo')==''){
      const alerta = this.alert.create({
        title: 'Error',
        subTitle: 'Faltan Campos',
        message: 'Favor de rellenar todos los campos obligatorios'
      });
      alerta.present();
    }else{
      this.servicio.registerUser(this.account.email,this.account.password).then((res)=>{
        this.navCtrl.push(MainPage);
      }).catch((err)=>{
        console.log(err);
        if(err.message=='The email address is badly formatted.'){
          const alerta = this.alert.create({
            title: 'Error',
            subTitle: 'Ha ocurrido un Error',
            message: 'El Email esta mal Formateado, favor corregirlo'
          });
          alerta.present();
        }
      });
    }
    /*this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
  }
}
