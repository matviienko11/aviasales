import {TicketInterface} from "../../app/interfaces/ticket.interface";

export class Ticket {
  carrier: string;
  price: number;
  segments: Array<any>
  stops: number;

  constructor(ticket: TicketInterface) {
    this.carrier = ticket.carrier;
    this.price = ticket.price;
    this.segments = ticket.segments;
    this.stops = this.segments[0].stops.length + this.segments[1].stops.length;
  }
}
