import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {filterTickets, loadTickets, sortingTickets} from "../../store/ticket.actions";
import {selectTickets} from "../../store/ticket.selectors";
import {Ticket} from "../../../shared/models/ticket";
import {Sorting} from "../../utils/enums";


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  @Input() stopsNumber: any;

  tickets: Ticket[];

  isCheapest: boolean = true;
  isQuickest: boolean = false;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadTickets());
    this.store.dispatch(sortingTickets({sorting: ''}));
    this.store.dispatch(filterTickets({filters: ['']}))
    this.store.select(selectTickets).subscribe(res => this.tickets = res);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.stopsNumber.currentValue.length) {
      this.store.dispatch(filterTickets({filters: [...changes.stopsNumber.currentValue]}))
      this.store.select(selectTickets).subscribe();
    }
  }

  toggleSorting(value: string) {
    if(value === Sorting.CHEAPEST) {
      this.isCheapest = true;
      this.isQuickest = false;
    } else {
      this.isCheapest = false;
      this.isQuickest = true;
    }
    this.store.dispatch(sortingTickets({sorting: value}));
    this.store.select(selectTickets).subscribe(res => this.tickets = res);
  }
}
