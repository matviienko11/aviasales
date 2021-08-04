import {TicketInterface} from "../../app/interfaces/ticket.interface";
import {Segment} from "./segment";

export class Ticket {
  carrier: string;
  price: number;
  segments: Array<Segment>
  stopsLength: number
  arrivalTimeTo: any
  arrivalTimeFrom: any
  flightLengthTo: any
  flightLengthFrom: any

  getArrivalTime(startTime: any, duration: any): any {
    const formattedStartTime = Date.parse(startTime);
    const durInMls = duration * 60000;
    return new Date(formattedStartTime + durInMls)
  }

  getFlightLength(value: number): string {
    let hours = (value / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return `${rhours}ч ${rminutes}м`;
  }

  constructor(ticket: TicketInterface) {
    this.carrier = ticket.carrier;
    this.price = ticket.price;
    this.segments = ticket.segments.map(segment => new Segment(segment))
    this.stopsLength = ticket.segments[0].stops.length + ticket.segments[1].stops.length
    this.arrivalTimeTo = this.getArrivalTime(ticket.segments[0].date, ticket.segments[0].duration)
    this.arrivalTimeFrom = this.getArrivalTime(ticket.segments[1].date, ticket.segments[1].duration)
    this.flightLengthTo = this.getFlightLength(ticket.segments[0].duration)
    this.flightLengthFrom = this.getFlightLength(ticket.segments[1].duration)
  }
}
