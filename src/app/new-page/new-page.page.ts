import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Lanzando ngOnInit");
  }

  ngOnDestroy(){
    console.log("Lanzando ngOnDestroy");
  }

  ionViewDidEnter(){
    console.log("Lanzando ionViewDidEnter");
  }

  ionViewDidLeave(){
    console.log("Lanzando ionViewDidLeave");
  }

  ionViewWillEnter(){
    console.log("Lanzando ionViewWillEnter");
  }

  ionViewWillLeave(){
    console.log("Lanzando ionViewWillLeave");
  }

}
