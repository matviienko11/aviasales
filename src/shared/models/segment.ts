export class Segment {
  origin: string
  destination: string
  date: string
  duration: number
  stops: string[]

  constructor(segment: any) {
    this.origin = segment.origin;
    this.destination = segment.destination;
    this.date = segment.date;
    this.duration = segment.duration;
    this.stops = segment.stops
  }
}
