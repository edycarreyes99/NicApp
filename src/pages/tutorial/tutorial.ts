import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: 'Bienvenido a NicApp',
            description: 'Busca, interactua y disfruta con todo lo que te ofrecemos',
            image: 'assets/icon/Logotipo.png',
          },
          {
            title: 'Que es NicApp?',
            description: 'Quieres conocer Nicaragua, hospedarte en hoteles, hacer compras en tiendas, supermercados, ir a un bar, restaurantes, comprar algun producto nacional?. NicApp te facilita todo esto para ti, te mostramos todos sus sitios turisticos, sus pequenos, medianos y grandes negocios con una mayor interaccion utilizando la realidad aumentada.',
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: '',
            description: 'La mejor aplicacion para encontrar todo lo que buscas en Nicaragua.',
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
