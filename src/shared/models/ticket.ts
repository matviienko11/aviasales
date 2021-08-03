import {TicketInterface} from "../../app/interfaces/ticket.interface";

export class Ticket {
  carrier: string;
  price: number;
  segments: Array<any>

  constructor(ticket: TicketInterface) {
    this.carrier = ticket.carrier;
    this.price = ticket.price;
    this.segments = ticket.segments;
  }
}
