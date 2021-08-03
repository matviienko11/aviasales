import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {TicketInterface} from "../../interfaces/ticket.interface";

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {

  @Input() ticket: TicketInterface;

  constructor() { }

  ngOnInit(): void {
  }

  showTicket(ticket: any) {
    console.log(ticket)
  }
}
