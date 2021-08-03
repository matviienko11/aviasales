import {Component, Input, OnInit} from '@angular/core';
import {TicketInterface} from "../../interfaces/ticket.interface";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {


  @Input()
  tickets?: TicketInterface[] | null;

  constructor() { }


  ngOnInit(): void {
  }

}
