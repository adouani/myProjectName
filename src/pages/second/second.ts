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
              private navParams: NavParams,
              private modalCtrl:ModalController) {
    this.message = this.navParams.get('message');
    console.log(this.message);
    console.log('call');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  showModal() {
      this.modalCtrl.create('DetailsPage').present();
  }
}
