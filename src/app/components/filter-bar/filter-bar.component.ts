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

  filterArr: any[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadSearchId());
    this.store.dispatch(loadTickets());
    this.store.dispatch(sortingTickets({sorting: 'Самый дешевый'}));
    this.store.dispatch(filterTickets({filters: ['']}))
    this.store.select(selectTickets).subscribe(res => this.tickets = res);
  }

  handleTabChange(e: any) {
    this.store.dispatch(sortingTickets({sorting: e.tab.textLabel}));
    this.store.select(selectTickets).subscribe(res => this.tickets = res);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.stopsNumber.currentValue || changes.stopsNumber.currentValue === 0) {
      this.filterArr.push(changes.stopsNumber.currentValue)
      this.store.dispatch(filterTickets({filters: [...this.filterArr]}))
      this.store.select(selectTickets).subscribe();
    }
  }
}
