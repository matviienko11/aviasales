import {createSelector} from "@ngrx/store";
import {AppState} from "./app.state";
import {Ticket} from "../interfaces/ticket.interface";

export const selectSearchId = createSelector(
  (state: AppState) => state.searchId,
  ({searchId}: any) => searchId
)

export const selectTicket = createSelector(
  (state: AppState) => state.ticket,
  (tickets: Array<Ticket>) => {
    return tickets;
  }
)

export const selectTickets = (state: AppState) => state.ticket;

export const selectTicketsByStops = (stops: any) => createSelector(
  selectTickets,
  (tickets: Array<Ticket>) => {
    console.log('hello fron store', stops)
    return tickets;
  }
)
