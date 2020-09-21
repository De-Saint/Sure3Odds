import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-payment-plans',
  templateUrl: 'payment-plans.html',
})
export class PaymentPlansPage {
  teams=[
    {img:'assets/imgs/teams/bate_borisov.png',team:'BATE Borisov',date:'Feb 13,2018',time:'17.30',league:'Premier League',result:'6 - 1'},
    {img:'assets/imgs/teams/real_madrid.png',team:'Real Madrid',date:'Feb 23,2018',time:'19:30',league:'Premier League',result:''},
    {img:'assets/imgs/teams/marseille.png',team:'Marseille',date:'Feb 28,2018',time:'22:00',league:'Premier League',result:''},
    {img:'assets/imgs/teams/bate_borisov.png',team:'BATE Borisov',date:'Feb 13,2018',time:'17.30',league:'Premier League',result:'6 - 1'},
    {img:'assets/imgs/teams/real_madrid.png',team:'Real Madrid',date:'Feb 23,2018',time:'19:30',league:'Premier League',result:''},
    {img:'assets/imgs/teams/marseille.png',team:'Marseille',date:'Feb 28,2018',time:'22:00',league:'Premier League',result:''},
    {img:'assets/imgs/teams/bate_borisov.png',team:'BATE Borisov',date:'Feb 13,2018',time:'17.30',league:'Premier League',result:'6 - 1'},
    {img:'assets/imgs/teams/real_madrid.png',team:'Real Madrid',date:'Feb 23,2018',time:'19:30',league:'Premier League',result:''},
    {img:'assets/imgs/teams/marseille.png',team:'Marseille',date:'Feb 28,2018',time:'22:00',league:'Premier League',result:''},
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPlansPage');
  }

}
