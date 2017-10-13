import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Switchboard';
  // var switches = []
  // for (var i=0; i< 10; i++){
  //   switches.push('true');
  // }

  switches = [true, false, false, true, true, true, true, true, true, true];

  flipSwitch(idx) {
    this.switches[idx] = !this.switches[idx];
  }
}
