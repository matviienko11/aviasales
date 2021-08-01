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

  // segments = this.tickets?.map(item => item.segments[0]);
  time = this.tickets?.map(item => console.log(item))
  constructor() { }

  ngOnInit(): void {
    console.log(this.tickets)
    // console.log(this.segments)
  }

}
