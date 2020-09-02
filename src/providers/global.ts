import { Injectable } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Injectable() 
export class Global {
  day: any;
  month: any;
  year: any;
  today: any;
  hour: any;
  minute: any;
  second: any;
 constructor(public popoverCtrl: PopoverController) {

  }   
   // search Popover
  callSearch(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopPage',{},{cssClass:'search_Pop'});
    popover.present({
      ev: myEvent
    });     
  } 
  getDate() {
    this.today = new Date();
    this.day = this.today.getDate();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();

    if (this.day < 10) {
      this.day = '0' + this.day
    }

    if (this.month < 10) {
      this.month = '0' + this.month
    }
    this.today = this.year + '-' + this.month + '-' + this.day;
    return this.today;
  }

}      


                    