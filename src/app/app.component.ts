import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stopsNumber: any[] = [];

  handleStopsNumber(e: any[]) {
    this.stopsNumber = [...e]
  }
}
