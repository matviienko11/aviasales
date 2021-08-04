import {TicketInterface} from "../../app/interfaces/ticket.interface";
import {Segment} from "./segment";

export class Ticket {
  carrier: string;
  price: number;
  segments: Array<Segment>
  stopsLength: number
  arrivalTimeTo: Date
  arrivalTimeFrom: Date
  flightLengthTo: string
  flightLengthFrom: string

  constructor(ticket: TicketInterface) {
    this.carrier = ticket.carrier;
    this.price = ticket.price;
    this.segments = ticket.segments.map(segment => new Segment(segment))
    this.stopsLength = ticket.segments[0].stops.length + ticket.segments[1].stops.length
    this.arrivalTimeTo = this.getArrivalTime(0)
    this.arrivalTimeFrom = this.getArrivalTime(1)
    this.flightLengthTo = this.getFlightLength(0)
    this.flightLengthFrom = this.getFlightLength(1)
  }

  getArrivalTime(value: number): Date {
    const formattedStartTime = Date.parse(this.segments[value].date);
    const durInMls = this.segments[value].duration * 60000;
    return new Date(formattedStartTime + durInMls)
  }


  getFlightLength(value: number): string {
    const hours = (this.segments[value].duration / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
  }
}
