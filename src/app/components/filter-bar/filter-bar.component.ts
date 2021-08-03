import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {filterTickets, loadSearchId, loadTickets, sortingTickets} from "../../store/ticket.actions";
import {Observable} from "rxjs";
import {TicketInterface} from "../../interfaces/ticket.interface";
import {selectTickets} from "../../store/ticket.selectors";

interface onChanges {
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit, onChanges {

  @Input() stopsNumber: any;

  tickets: TicketInterface[];

  // sortedByPriceTickets$ = this.store.select(state => {
  //   const copiedArr = [...state.tickets];
  //   return copiedArr.sort((a: any, b: any) => {
  //     return a.price - b.price
  //   }).slice(0, 5)
  // })

  // tickets = this.store.select(selectTickets)

  // sortedBySpeedTickets$ = this.store.select(state => {
  //   let copiedArr = [...state.tickets];
  //   return copiedArr.sort((a: any, b: any) => {
  //     const one = a.segments[0].duration + a.segments[1].duration;
  //     const two = b.segments[0].duration + b.segments[1].duration;
  //     return one - two;
  //   }).slice(0, 5);
  // })

  // sortedByPriceTickets: Observable<Ticket[]> = this.sortedByPriceTickets$;
  // sortedBySpeedTickets: Observable<Ticket[]> = this.sortedBySpeedTickets$;

  // sortedByPriceTickets: Observable<Ticket[]>;
  // sortedBySpeedTickets: Observable<Ticket[]>;

  // sortedTickets$: Observable<TicketInterface[]>
  // sortedTickets: TicketInterface[];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadSearchId());
    this.store.dispatch(loadTickets());
    this.store.dispatch(sortingTickets({sorting: 'Самый дешевый'}));
    this.store.select(selectTickets).subscribe(res => this.tickets = res);

    // this.store.dispatch(filterTickets({filters: []}))


    console.log(this.stopsNumber);

  }

  handleTabChange(e: any) {
    this.store.dispatch(sortingTickets({sorting: e.tab.textLabel}));
    this.store.select(selectTickets).subscribe(res => this.tickets = res);
  }

  ngOnChanges(changes: SimpleChanges) {

    // this.store.select(selectTickets).subscribe(res => console.log(res))

    // if(this.stopsNumber) {
    //   this.sortedByPriceTickets = this.store.select(state => {
    //     const copiedArr = [...state.tickets];
    //     return copiedArr.sort((a: any, b: any) => {
    //       return a.price - b.price
    //     }).filter(
    //       i => i.segments[0].stops.length + i.segments[1].stops.length == (changes.stopsNumber.currentValue || changes.stopsNumber.previousValue)
    //     ).slice(0, 5);
    //   })
    //
    //   this.sortedBySpeedTickets = this.store.select(state => {
    //     let copiedArr = [...state.tickets];
    //     return copiedArr.sort((a: any, b: any) => {
    //       const one = a.segments[0].duration + a.segments[1].duration;
    //       const two = b.segments[0].duration + b.segments[1].duration;
    //       return one - two;
    //     }).filter(
    //       i => i.segments[0].stops.length + i.segments[1].stops.length == (changes.stopsNumber.currentValue || changes.stopsNumber.previousValue)
    //     ).slice(0, 5);
    //   })
    //   return;
    }
}
