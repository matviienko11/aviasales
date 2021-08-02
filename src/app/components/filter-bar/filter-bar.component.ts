import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadSearchId, loadTickets} from "../../store/ticket.actions";

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  sortedByPriceTickets$ = this.store.select(state => {
    const copiedArr = [...state.tickets];
    return copiedArr.sort((a: any, b: any) => {
      return a.price - b.price
    }).slice(0, 5);
  })

  sortedBySpeedTickets$ = this.store.select(state => {
    const copiedArr = [...state.tickets];
    return copiedArr.sort((a: any, b: any) => {
      const one = a.segments[0].duration + a.segments[1].duration;
      const two = b.segments[0].duration + b.segments[1].duration;
      return one - two;
    }).slice(0, 5)
  })

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadSearchId());
    this.store.dispatch(loadTickets());
  }

}
