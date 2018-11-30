import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabase} from 'angularfire2/database';
import { MatDialog } from '@angular/material';

@Injectable()
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    private af: AngularFireDatabase,
  ) { }
  //terminan variables de Historial-Page

  //funciones de filtrado para el Historial-Page
  /*extraerDatos() {
    this.af.list('/contactos').snapshotChanges()
      .map(temperaturas => {
        let values = temperaturas.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
        return temperaturas.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      })
      .subscribe(temperaturas => {
        this.temperaturas = temperaturas;
        //console.log(Object.values(this.temperaturas));
      })
  }*/

  

  registerUser(email, pass) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  loginEmail(email, pass) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.map(user => user);
  }

  logout() {
    return this.afAuth.auth.signOut().then(function () {
      console.log("Se ha cerrado sesion");
    }).catch(function (error) {
      console.log(error);
    });
  }

  verificaUsuario() {
    var user = this.afAuth.auth.currentUser;

    user.sendEmailVerification().then(function () {
      //email sent
      console.log('Mensaje de Confirmacion Enviado');
    }).catch(function (error) {
      console.log(error);
    })
  }
  emailVerified() {

  }
}