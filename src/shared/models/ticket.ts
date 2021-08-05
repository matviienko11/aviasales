import {TicketInterface} from "../../app/interfaces/ticket.interface";
import {Segment} from "./segment";
import * as moment from "moment-timezone";

export class Ticket {
  carrier: string;
  price: number;
  segments: Array<Segment>
  stopsLength: number
  departureTimeTo: string
  departureTimeFrom: string
  arrivalTimeTo: string
  arrivalTimeFrom: string
  flightLengthTo: string
  flightLengthFrom: string

  constructor(ticket: TicketInterface) {
    this.carrier = ticket.carrier;
    this.price = ticket.price;
    this.segments = ticket.segments.map(segment => new Segment(segment))
    this.stopsLength = ticket.segments[0].stops.length + ticket.segments[1].stops.length
    this.departureTimeTo = this.getDepartureTime(0)
    this.departureTimeFrom = this.getDepartureTime(1)
    this.arrivalTimeTo = this.getArrivalTime(0)
    this.arrivalTimeFrom = this.getArrivalTime(1)
    this.flightLengthTo = this.getFlightLength(0)
    this.flightLengthFrom = this.getFlightLength(1)
  }

  getDepartureTime(value: number): string {
    return moment(this.segments[value].date)
      .tz('GMT')
      .format('HH:mm');
  }

  getArrivalTime(value: number): string {
    const duration = this.segments[value].duration;
    return moment(this.segments[value].date)
      .tz('GMT')
      .add(duration, "minutes")
      .format('HH:mm');
  }

  getFlightLength(value: number): string {
    const duration = moment.duration(this.segments[value].duration, "minutes");
    const hh = (duration.years()*(365*24)) + (duration.months()*(30*24)) + (duration.days()*24) + (duration.hours());
    const mm = duration.minutes();
    return `${hh}ч ${mm}м`
  }
}
