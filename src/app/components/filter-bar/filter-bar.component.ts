import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadSearchId, loadTickets} from "../../store/ticket.actions";
import {Observable} from "rxjs";
import {Ticket} from "../../interfaces/ticket.interface";

interface onChanges {
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, onChanges {

  @Input() stopsNumber: any;

  sortedByPriceTickets$ = this.store.select(state => {
    const copiedArr = [...state.tickets];
    return copiedArr.sort((a: any, b: any) => {
      return a.price - b.price
    }).slice(0, 5)
  })

  sortedBySpeedTickets$ = this.store.select(state => {
    let copiedArr = [...state.tickets];
    return copiedArr.sort((a: any, b: any) => {
      const one = a.segments[0].duration + a.segments[1].duration;
      const two = b.segments[0].duration + b.segments[1].duration;
      return one - two;
    }).slice(0, 5);
  })

  sortedByPriceTickets: Observable<Ticket[]> = this.sortedByPriceTickets$;
  sortedBySpeedTickets: Observable<Ticket[]> = this.sortedBySpeedTickets$;


  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadSearchId());
    this.store.dispatch(loadTickets());
    console.log(this.stopsNumber);

  }

  handle(e: any) {
    // this.sortedBySpeedTickets$.subscribe(data => console.log(data));
    // console.log(this.stopsNumber);
  }

  ngOnChanges(changes: SimpleChanges) {

    if(this.stopsNumber) {
      this.sortedByPriceTickets = this.store.select(state => {
        const copiedArr = [...state.tickets];
        return copiedArr.sort((a: any, b: any) => {
          return a.price - b.price
        }).filter(
          i => i.segments[0].stops.length + i.segments[1].stops.length == (changes.stopsNumber.currentValue || changes.stopsNumber.previousValue)
        ).slice(0, 5);
      })

      this.sortedBySpeedTickets = this.store.select(state => {
        let copiedArr = [...state.tickets];
        return copiedArr.sort((a: any, b: any) => {
          const one = a.segments[0].duration + a.segments[1].duration;
          const two = b.segments[0].duration + b.segments[1].duration;
          return one - two;
        }).filter(
          i => i.segments[0].stops.length + i.segments[1].stops.length == (changes.stopsNumber.currentValue || changes.stopsNumber.previousValue)
        ).slice(0, 5);
      })
      return;
    }
}}
