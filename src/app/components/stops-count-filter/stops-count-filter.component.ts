import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-stops-count-filter',
  templateUrl: './stops-count-filter.component.html',
  styleUrls: ['./stops-count-filter.component.scss']
})
export class StopsCountFilterComponent implements OnInit {

  @Output()
  stopsNumber = new EventEmitter<any>();

  @Output()
  stopArr: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleStops(e: any) {
    if(e.currentTarget.checked) {
      this.stopArr.push(+e.target.value);
      this.stopsNumber.emit(this.stopArr)
    }
    if(!e.currentTarget.checked) {
      this.stopArr = [...this.stopArr].filter(i => i !== +e.target.value)
      this.stopsNumber.emit(this.stopArr)
    }
  }
}
