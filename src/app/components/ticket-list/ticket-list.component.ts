import {Component, Input, OnInit} from '@angular/core';
import {TicketsService} from "../../services/tickets.service";
import {Store, select} from "@ngrx/store";
import {selectSearchId, selectTicket} from "../../store/ticket.selectors";
import {getSearchId, getTickets, loadSearchId, loadTickets} from "../../store/ticket.actions";
import {map, pluck, switchMap} from "rxjs/operators";
import {Ticket} from "../../interfaces/ticket.interface";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {


  @Input()
  sortedByPrice?: Ticket[] | null;

  @Input()
  sortedBySpeed?: Ticket[] | null;

  constructor() { }


  ngOnInit(): void {
  }

}
