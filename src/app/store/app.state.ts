import {Ticket} from "../../shared/models/ticket";

export interface AppState {
  searchId: string
  ticket: Ticket[]
}
