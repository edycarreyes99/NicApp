import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

import { ServicioService } from "../../servicio.service";

import { AngularFireDatabase } from "angularfire2/database";

import { User } from '../../providers';
import { MainPage } from '../';
import { Facebook,FacebookLoginResponse } from '@ionic-native/facebook';
import { first } from 'rxjs/operator/first';

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
  tipo:string;
  account: { profilePhoto:string, username:string , nombres: string,apellidos:string, email: string, password: string, telefono:string} = {
    nombres: '',
    email: '',
    password: '',
    telefono: '',
    apellidos: '',
    profilePhoto:'',
    username: ''
  };

  tipoRegistro:string;

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public servicio: ServicioService,
    public alert: AlertController,
    public db: AngularFireDatabase,
    public facebook: Facebook
    ) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  cambiarTipo(tipo:string){
    this.tipo = tipo;
  }
  doSignupFacebook(){
    console.log('facebook');
    this.facebook.login(['email','public_profile']).then((response:FacebookLoginResponse)=>{
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large',[]).then(profile=>{
        this.account.email = profile['email'];
        this.account.nombres = profile['first_name'];
        this.account.profilePhoto = profile['picture_large']['data']['url'];
        this.account.username = profile['name'];
        const alerta = this.alert.create({
          title: 'Datos de Facebook',
          message:`${this.account.nombres}`
        })
      })
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
        this.db.database.ref(`Usuarios/${this.account.nombres}`).push({
          Email:this.account.email,
          Nombre:this.account.nombres+this.account.apellidos,
          Sexo: this.sexo,
          Telefono:this.account.telefono,
          Password:this.account.password
        });
      }).catch((err)=>{
        console.log(err);
        if(err.message=='The email address is badly formatted.'){
          const alerta = this.alert.create({
            title: 'Error',
            subTitle: 'Ha ocurrido un Error',
            message: 'El Email esta mal Formateado, favor corregirlo'
          });
          alerta.present();
        }else{
          const alerta = this.alert.create({
            title: 'Error',
            subTitle: 'Ha ocurrido un Error',
            message: err
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
