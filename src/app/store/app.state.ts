import {Ticket} from "../../shared/models/ticket";

export interface AppState {
  ticket: Ticket[]
  error: string
}
