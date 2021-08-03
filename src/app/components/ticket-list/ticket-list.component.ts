import {Component, Input, OnInit} from '@angular/core';
import {TicketsService} from "../../services/tickets.service";
import {Store, select} from "@ngrx/store";
import {selectSearchId, selectTicket, selectTicketsByStops} from "../../store/ticket.selectors";
import {getSearchId, getTickets, loadSearchId, loadTickets} from "../../store/ticket.actions";
import {map, pluck, switchMap} from "rxjs/operators";
import {Ticket} from "../../interfaces/ticket.interface";
import {ticketReducer} from "../../store/ticket.reducer";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {


  @Input()
  tickets?: Ticket[] | null;

  constructor() { }


  ngOnInit(): void {
  }

}
