import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../../../shared/models/ticket";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {


  @Input()
  tickets: Ticket[] | null;

  constructor() { }


  ngOnInit(): void {
  }

}
