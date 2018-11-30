webpackJsonp([3],{

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseConfig", function() { return FirebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FirebaseConfig = {
    apiKey: "AIzaSyAIBPLFwnGQtelwGnPBAQz30JvDqGB0nlI",
    authDomain: "nicapp-firecodes.firebaseapp.com",
    databaseURL: "https://nicapp-firecodes.firebaseio.com",
    projectId: "nicapp-firecodes",
    storageBucket: "nicapp-firecodes.appspot.com",
    messagingSenderId: "831820679547"
};
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["AngularFireModule"].initializeApp(FirebaseConfig),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicio_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, servicio, alert, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.servicio = servicio;
        this.alert = alert;
        this.db = db;
        this.account = {
            name: '',
            email: '',
            password: '',
            telefono: ''
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        // Attempt to login in through our User service
        var _this = this;
        if ((this.account.email || this.account.password || this.sexo == 'Sexo') == '') {
            var alerta = this.alert.create({
                title: 'Error',
                subTitle: 'Faltan Campos',
                message: 'Favor de rellenar todos los campos obligatorios'
            });
            alerta.present();
        }
        else {
            this.servicio.registerUser(this.account.email, this.account.password).then(function (res) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6____["b" /* MainPage */]);
                _this.db.database.ref("Usuarios/" + _this.account.name).push({
                    Email: _this.account.email,
                    Nombre: _this.account.name,
                    Sexo: _this.sexo,
                    Telefono: _this.account.telefono,
                    Password: _this.account.password
                });
            }).catch(function (err) {
                console.log(err);
                if (err.message == 'The email address is badly formatted.') {
                    var alerta = _this.alert.create({
                        title: 'Error',
                        subTitle: 'Ha ocurrido un Error',
                        message: 'El Email esta mal Formateado, favor corregirlo'
                    });
                    alerta.present();
                }
                else {
                    var alerta = _this.alert.create({
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
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/bms/Desktop/NicApp/NicApp/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content style="margin: auto;" padding="true">\n  <ion-card>\n\n    <img style="height: 200px; margin: auto; width: 200px;" src="../..//assets/imgs/signup/signup.png">\n\n    <ion-card-content>\n      <form (submit)="doSignup()">\n        <ion-list>\n\n          <ion-item>\n            <ion-label floating>{{ \'NAME\' | translate }}</ion-label>\n            <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n            <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n          </ion-item>\n\n          <!--\n      Want to use a Username instead of an Email? Here you go:\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n          <ion-item>\n            <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n            <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Numero de Telefono (Opcional)</ion-label>\n            <ion-input type=\'text\' [(ngModel)]=\'account.telefono\' name=\'telefono\'></ion-input>\n          </ion-item>\n            <ion-list padding-top padding-bottom>\n              <ion-item>\n                <ion-label>Sexo</ion-label>\n                <ion-select [(ngModel)]="sexo" name=\'sexo\'>\n                  <ion-option value="Masculino">Masculino</ion-option>\n                  <ion-option value="Femenino">Femenino</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n        </ion-list>\n        <ion-row>\n          <ion-col>\n            <div padding>\n              <button ion-button color="primary" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/bms/Desktop/NicApp/NicApp/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__servicio_service__["a" /* ServicioService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=3.js.map