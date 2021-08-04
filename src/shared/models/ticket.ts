import {TicketInterface} from "../../app/interfaces/ticket.interface";
import {Segment} from "./segment";

export class Ticket {
  carrier: string;
  price: number;
  segments: Array<Segment>

  constructor(ticket: TicketInterface) {
    this.carrier = ticket.carrier;
    this.price = ticket.price;
    this.segments = ticket.segments.map(segment => new Segment(segment))
  }
}
