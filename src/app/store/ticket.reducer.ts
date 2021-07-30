import {createReducer, on, Action} from "@ngrx/store";
import {getSearchId, getTickets} from "./ticket.actions";
import {Ticket} from "../interfaces/ticket.interface";

export const initialSearchState: string = '';
export const initialTicketState: Ticket[] = [];

export const searchIdReducer = createReducer(
    initialSearchState,
  on(getSearchId, (state, {searchId}) => {
    return searchId
  })
)

export const ticketReducer = createReducer(
  initialTicketState,
  on(getTickets, (state, {tickets}) => {
    return [...tickets.tickets]
  })
)
