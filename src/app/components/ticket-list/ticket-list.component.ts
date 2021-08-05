import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from "../../../shared/models/ticket";
import {Store} from "@ngrx/store";
import {selectError} from "../../store/ticket.selectors";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {


  @Input()
  tickets: Ticket[] | null;

  errorMessage: string;

  constructor(private store: Store<any>) { }


  ngOnInit(): void {
    this.store.select(selectError).subscribe(res => this.errorMessage = res)
  }

}
