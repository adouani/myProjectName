import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  message:string;
  constructor(private navCtrl: NavController,
              private navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  showModal() {
      this.navCtrl.push('DetailsPage');
  }
}
