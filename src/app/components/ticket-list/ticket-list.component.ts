import {Component, Input, OnInit} from '@angular/core';
import {TicketsService} from "../../services/tickets.service";
import {Store, select} from "@ngrx/store";
import {selectSearchId, selectTicket} from "../../store/ticket.selectors";
import {getSearchId, getTickets, loadSearchId, loadTickets} from "../../store/ticket.actions";
import {map, pluck, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  searchId$ = this.store.select(state => {
    return state.searchId.searchId
  });
  tickets$ = this.store.select(state => {
    return state.tickets.slice(0, 5)
  });
  time: any;

  constructor(private ticketService: TicketsService, private store: Store<any>) { }


  ngOnInit(): void {
    // this.ticketService
    //   .getSearchId()
    //   .pipe(
    //     pluck('searchId'),
    //     switchMap((searchId: string) => this.ticketService.getTickets(searchId))
    //   )
    //   .subscribe(tickets => {
    //     this.store.dispatch(getTickets({tickets}))
    //   });

    // this.ticketService.getSearchId().subscribe(searchId => {
    //   this.store.dispatch(getSearchId({searchId}))
    // })
    // this.ticketService.getTickets('3log0').subscribe(tickets => {
    //   this.store.dispatch(getTickets({tickets}))
    // })
    this.store.dispatch(loadSearchId());
    this.store.dispatch(loadTickets());
  }

}
