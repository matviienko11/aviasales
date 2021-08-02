import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../../interfaces/ticket.interface";

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {

  @Input()
  tickets!: Ticket[] | null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.tickets)
  }

  showTicket(ticket: any) {
    console.log(ticket)
  }
}
